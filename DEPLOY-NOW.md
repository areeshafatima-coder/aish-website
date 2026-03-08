# Deploy Aish – 3 things to do (no crashing)

Do these in order. Your domain: **aishofficial.shop**

---

## 1. GitHub – create repo and push code

**A.** Open this link (creates a new repo for you):  
**https://github.com/new?name=aish-website**

- Leave **Public**.
- Do **not** tick "Add a README".
- Click **Create repository**.

**B.** Copy your new repo URL. It will look like:  
`https://github.com/YOUR_USERNAME/aish-website`  
(Replace YOUR_USERNAME with your GitHub username.)

**C.** Open **Terminal** (Mac) or **Command Prompt** (Windows), then run these lines **one by one**. When it asks for the repo URL, use the URL from step B.

```bash
cd "/Users/areesha/Desktop/website aish"
git init
git add .
git commit -m "Aish website - initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aish-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your real GitHub username in the `git remote add` line.  
If it asks for login, use your GitHub email + password (or a Personal Access Token if you use 2FA).

---

## 2. Vercel – deploy and add domain

**A.** Go to **https://vercel.com** and log in with **GitHub**.

**B.** Click **Add New…** → **Project**. Click **Import** next to **aish-website**. Click **Deploy**. Wait until you get a green tick and a URL like `aish-website-xxx.vercel.app`.

**C.** In the project: **Settings** → **Domains** → add **aishofficial.shop** → Add.  
Note the values Vercel shows (A record = `76.76.21.21`, CNAME for www = `cname.vercel-dns.com`).

**D.** **Settings** → **Environment Variables** → add:
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://aishofficial.shop`  
Save, then **Deployments** → … on latest → **Redeploy**.

---

## 3. Namecheap – point domain to Vercel

**A.** Go to **https://www.namecheap.com** → **Domain List** → **Manage** next to aishofficial.shop.

**B.** Open **Advanced DNS**.

**C.** Add or edit:
- **A Record** – Host: `@`, Value: `76.76.21.21`, TTL: Automatic.
- **CNAME Record** – Host: `www`, Value: `cname.vercel-dns.com`, TTL: Automatic.

Save. Wait 5–60 minutes. In Vercel → Domains, your domain should show **Valid**.

---

Done. Your site will be live at **https://aishofficial.shop**.
