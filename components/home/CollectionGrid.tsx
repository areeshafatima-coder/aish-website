import Link from "next/link";
import Image from "next/image";
import type { Collection } from "@/lib/data";

export default function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <div className="collection-grid">
      {collections.map((col) => (
        <Link
          key={col.slug}
          href={`/collections/${col.slug}`}
          className={`collection-card collection-card--${col.slug} ${col.large ? "collection-card--large" : ""}`}
        >
          <div className="collection-card__img">
            <Image
              src={col.image}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 699px) 50vw, (max-width: 1023px) 33vw, 25vw"
              className="collection-card__image"
            />
          </div>
          <span className="collection-name">{col.name}</span>
          <span className="collection-cta">{col.cta}</span>
        </Link>
      ))}
    </div>
  );
}
