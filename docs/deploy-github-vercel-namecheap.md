# Connect GitHub + Vercel + Namecheap (Your Domain)

Follow these steps in order. Replace **yourdomain.com** with your real domain (e.g. **aishofficial.shop**).

---

## Part 1: Put your code on GitHub

### Step 1.1 – Create a new repo on GitHub

1. Go to **https://github.com** and log in.
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** `aish-website` (or any name you like).
4. Leave it **Public**. Do **not** tick "Add a README".
5. Click **Create repository**.

### Step 1.2 – Push your project from your computer

1. Open **Terminal** (Mac) or **Command Prompt** (Windows).
2. Go to your project folder:
   ```bash
   cd "/Users/areesha/Desktop/website aish"
   ```
3. Turn the folder into a Git repo and push (run these one by one):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aish website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aish-website.git
   git push -u origin main
   ```
   Replace **YOUR_USERNAME** with your actual GitHub username.  
   If GitHub asks you to log in, use your GitHub email + password (or a Personal Access Token if you use 2FA).

When this is done, your code is on GitHub.

---

## Part 2: Deploy on Vercel and get a live URL

### Step 2.1 – Sign in to Vercel with GitHub

1. Go to **https://vercel.com**.
2. Click **Sign Up** or **Log In**.
3. Choose **Continue with GitHub** and allow Vercel to see your repos.

### Step 2.2 – Import your repo

1. On Vercel’s dashboard, click **Add New…** → **Project**.
2. You should see **aish-website** (or whatever you named it). Click **Import** next to it.
3. Leave all settings as they are (Framework: Next.js, Root Directory: .).
4. Click **Deploy**.
5. Wait 1–2 minutes. When it’s done, you’ll get a URL like **aish-website-xxx.vercel.app**. That’s your live site.

### Step 2.3 – Add your real domain in Vercel

1. Open your project on Vercel.
2. Go to **Settings** → **Domains**.
3. Under **Domain**, type your full domain, e.g. **aishofficial.shop**.
4. Click **Add**.
5. Vercel will show you something like:
   - **A record:** `76.76.21.21`  
   - **CNAME (www):** `cname.vercel-dns.com`  
   Keep this tab open – you’ll use it in Namecheap next.

---

## Part 3: Point Namecheap to Vercel

### Step 3.1 – Log in to Namecheap

1. Go to **https://www.namecheap.com** and log in.
2. Click **Domain List** and find your domain (e.g. aishofficial.shop).

### Step 3.2 – Open DNS settings

1. Click **Manage** next to your domain.
2. Open the **Advanced DNS** tab.

### Step 3.3 – Set the records Vercel asked for

**Option A – Root domain (aishofficial.shop) only**

1. Add or edit an **A Record**:
   - **Host:** `@`
   - **Value:** `76.76.21.21` (use the IP Vercel showed you).
   - **TTL:** Automatic (or 300).
2. If there is an existing **URL Redirect** or **CNAME** for `@`, remove or disable it so the A record works.

**Option B – www (www.aishofficial.shop) as well**

1. Add or edit a **CNAME Record**:
   - **Host:** `www`
   - **Value:** `cname.vercel-dns.com` (exactly as Vercel showed).
   - **TTL:** Automatic (or 300).

2. For the root **aishofficial.shop**, still use the **A Record** to `76.76.21.21` as above.

Save the DNS changes. It can take 5–60 minutes to update.

### Step 3.4 – Confirm in Vercel

1. Back in Vercel → **Settings** → **Domains**.
2. Next to your domain it will say **Valid** or **Pending**. When it says **Valid**, your domain is attached.

---

## Part 4: Tell the site its real URL (SEO + links)

1. In Vercel, open your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://aishofficial.shop` (or `https://www.aishofficial.shop` if you only use www).
3. Save, then go to **Deployments** → click the **⋯** on the latest deployment → **Redeploy** so the new variable is used.

After redeploy, the site will use your domain in metadata, sitemap, and links.

---

## Quick checklist

- [ ] Code pushed to GitHub.
- [ ] Project imported and deployed on Vercel.
- [ ] Domain added in Vercel (Settings → Domains).
- [ ] Namecheap DNS: A record for `@` → `76.76.21.21` (and CNAME for `www` if you use www).
- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel and project redeployed.

If any step doesn’t match what you see on screen, tell me the exact screen (e.g. “Namecheap Advanced DNS”) and I’ll adjust the steps for you.
