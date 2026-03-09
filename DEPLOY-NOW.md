# Deploy Aish — do these 4 steps (no coding)

Use your domain: **aishofficial.shop**. Do each step in order.

---

## STEP 1 — GitHub (2 min)

1. Open: **https://github.com/new**
2. **Repository name:** `aish-website`
3. Leave **Public**. Do **not** tick "Add a README".
4. Click **Create repository**.
5. **Leave that page open** — you need the repo URL. It looks like:  
   `https://github.com/YOUR_USERNAME/aish-website`  
   Copy it.

---

## STEP 2 — Push your code (1 min)

1. Open **Terminal** (Mac: Spotlight → type "Terminal" → Enter).
2. Paste and run these **one block at a time** (replace `YOUR_USERNAME` with your GitHub username from the URL above):

```bash
cd "/Users/areesha/Desktop/website aish"
```

```bash
git init
git add .
git commit -m "Aish website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aish-website.git
git push -u origin main
```

3. If it asks for login: use your **GitHub username** and a **Personal Access Token** (not your password).  
   To create a token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token. Tick `repo`. Copy the token and paste it when Terminal asks for password.

---

## STEP 3 — Vercel (2 min)

1. Open: **https://vercel.com**
2. Click **Sign Up** or **Log In** → **Continue with GitHub**.
3. Click **Add New…** → **Project**.
4. Click **Import** next to **aish-website**.
5. Click **Deploy**. Wait 1–2 minutes.
6. When done, click **Settings** → **Domains** → type: **aishofficial.shop** → **Add**.
7. Vercel will show you:
   - **A record:** `76.76.21.21`
   - **CNAME for www:** `cname.vercel-dns.com`  
   Keep this page open for Step 4.

---

## STEP 4 — Namecheap DNS (2 min)

1. Open: **https://www.namecheap.com** → log in → **Domain List** → **Manage** next to aishofficial.shop.
2. Open the **Advanced DNS** tab.
3. Add or edit:
   - **A Record** — Host: `@` — Value: `76.76.21.21` — TTL: Automatic
   - **CNAME Record** — Host: `www` — Value: `cname.vercel-dns.com` — TTL: Automatic
4. Remove any other A or CNAME for `@` or `www` that point somewhere else.
5. Save.

---

## STEP 5 — Set site URL on Vercel (1 min)

1. Back in Vercel → your project → **Settings** → **Environment Variables**.
2. **Name:** `NEXT_PUBLIC_SITE_URL`  
   **Value:** `https://aishofficial.shop`  
   Click **Save**.
3. Go to **Deployments** → click **⋯** on the latest one → **Redeploy**.

---

Done. In 5–60 minutes your site will be live at **https://aishofficial.shop**.

If any step fails, send a screenshot of the screen where you’re stuck and say which step number — I’ll tell you exactly what to click or type.
