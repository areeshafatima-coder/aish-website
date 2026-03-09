import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '../public/assets/');
const WEBP_QUALITY = 88;
const EFFORT = 6;
const DRY_RUN = process.argv.includes('--dry-run');

const DUPES_TO_SKIP = [
  'aish-banner-1-4k',
  'aish-banner-2-4k',
  'aish-banner-3-4k',
  'aish-banner-4-4k',
];

async function main() {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'} | Quality: ${WEBP_QUALITY}`);
  const files = await readdir(ASSETS_DIR);
  const images = files.filter(f => /\.(png|jpe?g)$/i.test(f));
  console.log(`Found ${images.length} images.\n`);

  let totalOrig = 0, totalWebp = 0, converted = 0, errors = 0;

  for (const filename of images) {
    const inputPath = join(ASSETS_DIR, filename);
    const stem = basename(filename, extname(filename));
    const outputPath = join(ASSETS_DIR, stem + '.webp');
    const origStat = await stat(inputPath);
    totalOrig += origStat.size;

    if (DUPES_TO_SKIP.includes(stem)) {
      console.log(`[SKIP] ${filename} — confirmed duplicate, deleting`);
      if (!DRY_RUN) await unlink(inputPath);
      continue;
    }

    try {
      const { data, info } = await sharp(inputPath)
        .webp({ quality: WEBP_QUALITY, effort: EFFORT })
        .toBuffer({ resolveWithObject: true });

      totalWebp += info.size;
      const pct = Math.round((1 - info.size / origStat.size) * 100);
      console.log(`[OK] ${filename} → ${stem}.webp | ${(origStat.size/1024/1024).toFixed(1)}MB → ${(info.size/1024).toFixed(0)}KB (-${pct}%)`);

      if (!DRY_RUN) {
        await sharp(inputPath).webp({ quality: WEBP_QUALITY, effort: EFFORT }).toFile(outputPath);
        await unlink(inputPath);
      }
      converted++;
    } catch (err) {
      console.error(`[ERR] ${filename}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Converted: ${converted} | Errors: ${errors}`);
  console.log(`Original: ${(totalOrig/1024/1024).toFixed(1)} MB → WebP est: ${(totalWebp/1024/1024).toFixed(1)} MB`);
  console.log(`Reduction: ~${Math.round((1 - totalWebp/totalOrig) * 100)}%`);
  if (DRY_RUN) console.log('\nRe-run without --dry-run to apply.');
}

main().catch(console.error);
