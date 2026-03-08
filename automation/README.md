## Aish Social Bot (Pinterest + Instagram/Facebook)

This folder will hold small scripts that:

- Read your products and images from the website
- Generate **SEO‑optimised titles, descriptions and hashtags** for your niche
- (When you add your keys) call the **Pinterest** and **Meta (Instagram/Facebook)** APIs to publish posts

You always stay in control:

- The bot **never logs in as you through a browser**
- You can first run it in **preview mode** to see images + captions
- Only after you are happy, you run it in **publish mode**

### 1. Files

- `config.example.json` – where you define which products to post and which boards/accounts to use.
- `env.example` – shows which API keys you must create and copy into a local `.env` (never commit real keys).
- `generateSocialQueue.ts` – reads `lib/data.ts` and creates a queue of posts with titles, descriptions and hashtags.
- `postToPinterest.ts` – takes the queue and calls the Pinterest API.
- `postToMeta.ts` – takes the queue and calls the Meta Graph API (Instagram + Facebook).

### 2. Setup (high level)

1. **Duplicate the env file**
   - Copy `automation/env.example` → `automation/.env.local`
   - Fill in the real values once you have keys (Pinterest + Meta).

2. **Tell the bot what to post**
   - Copy `automation/config.example.json` → `automation/config.json`
   - Edit `config.json`:
     - Choose which product slugs to include
     - Set your Pinterest board ID and Instagram/Facebook IDs

3. **Preview posts (no publishing)**
   - From the project root run:
     - `npx ts-node automation/generateSocialQueue.ts --preview`
   - This prints out for each product:
     - Image path being used
     - Generated title, description, hashtags and target URLs

4. **Publish (after you approve)**
   - Pinterest: `npx ts-node automation/postToPinterest.ts`
   - Insta/Facebook: `npx ts-node automation/postToMeta.ts`

### 3. What the bot focuses on

- Pakistani bridal + festive niche keywords (walima, nikah, valima, reception, UK/US diaspora, lehenga, gown, couture, etc.)
- Clean, premium tone matching the Aish website
- Consistent format:
  - Hook line
  - 2–3 detail lines (fabric, work, occasion)
  - Call‑to‑action
  - Hashtags set

> You do **not** have to write or understand code to use this. Your only tasks are:
> - create API keys once in Pinterest + Meta,
> - paste them into `.env.local`,
> - run the preview command, approve, then run the publish commands.

