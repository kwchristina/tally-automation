# Deploy to Vercel in 5 Minutes 🚀

Vercel is perfect for this — serverless, free, auto-scales, and integrates seamlessly with GitHub.

---

## Why Vercel for This?
- ✅ Serverless (no server to manage)
- ✅ Free tier is generous (unlimited API calls)
- ✅ Auto-deploys on every GitHub push
- ✅ Built-in monitoring & logs
- ✅ Instant — no build queues like Railway

---

## Step 1: Create a GitHub Repository

1. Go to **github.com** and sign in (create account if needed)
2. Click **+ New** (top right) → **New repository**
3. Name it: `tally-automation` (or your choice)
4. Choose **Public** (no secrets in code)
5. Click **Create repository**

---

## Step 2: Upload Your Files to GitHub

Download these 6 files from outputs folder to your computer:
- `api/webhook.js`
- `vercel.json`
- `package.json`
- `.env.example`
- `SETUP_GUIDE.md`
- `TALLY_FIELD_MAPPING.md`

**Upload to GitHub:**
1. In your new repo, click **Add file** → **Upload files**
2. Drag and drop all files
3. Important: Make sure the folder structure is:
   ```
   your-repo/
   ├── api/
   │   └── webhook.js
   ├── vercel.json
   ├── package.json
   ├── .env.example
   ├── SETUP_GUIDE.md
   └── TALLY_FIELD_MAPPING.md
   ```
4. Click **Commit changes**

---

## Step 3: Connect Vercel to GitHub

1. Go to **vercel.com**
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel to access your GitHub account
4. You're in!

---

## Step 4: Deploy Your Repository

1. In Vercel dashboard, click **Add New...** → **Project**
2. Click **Import Git Repository**
3. Find your `tally-automation` repo and click **Import**
4. Vercel detects `vercel.json` automatically ✅

**Settings page appears:**
- **Framework**: Leave as "Other" (it's a custom serverless function)
- **Build Command**: Leave blank (Vercel auto-detects)
- **Output Directory**: Leave blank

5. Click **Deploy**
6. Wait 30-60 seconds...
7. You'll see: **🎉 Congratulations! Your site is live**

---

## Step 5: Add Environment Variables

**CRITICAL** — Without these, emails won't send.

1. In Vercel dashboard, go to your project
2. Click **Settings** tab (top menu)
3. Click **Environment Variables** (left sidebar)
4. Add these two variables:

| Name | Value | How to Get |
|---|---|---|
| `GMAIL_USER` | your-email@gmail.com | Your Gmail address |
| `GMAIL_APP_PASSWORD` | xxxx xxxx xxxx xxxx | See below ⬇️ |

### Get Gmail App Password (2 min):

1. Go to **https://myaccount.google.com/apppasswords**
2. If prompted, sign in
3. Select:
   - **App**: Mail
   - **Device**: Windows Computer (or your device)
4. Click **Generate**
5. Google shows: `abcd efgh ijkl mnop`
6. Copy it (remove spaces)
7. In Vercel, paste into `GMAIL_APP_PASSWORD`

**Add both variables, then click Save**

---

## Step 6: Redeploy with Environment Variables

1. After saving environment variables, Vercel auto-redeploys (check Deployments tab)
2. Or manually redeploy:
   - Click **Deployments** tab
   - Click the latest deployment
   - Click **Redeploy** button

---

## Step 7: Get Your Webhook URL

1. In Vercel dashboard, go to **Project** page
2. Look for **Domains** section
3. Your URL looks like: `https://tally-automation.vercel.app`
4. **Copy it**

Your webhook endpoint is:
```
https://tally-automation.vercel.app/webhook/tally
```

---

## Step 8: Connect to Tally

1. Open your Tally form: https://tally.so/r/Me6r98
2. Click **Settings** ⚙️ (top right)
3. Go to **Integrations** → **Webhooks**
4. Click **Add Webhook**
5. Paste your Vercel webhook URL:
   ```
   https://tally-automation.vercel.app/webhook/tally
   ```
6. Select **Form Submission** as trigger
7. Click **Test Webhook** (optional, but nice to verify)
8. Click **Save**

---

## Step 9: Test It 🎉

**Test Option 1: Fill out the form**
1. Open your Tally form in a new tab
2. Fill it out with test data
3. Submit
4. Check your email in ~10 seconds

**Test Option 2: Manual webhook test**

In Tally webhook settings, click **Test Webhook** and you should see:
- ✅ "Test successful"
- Response: `{"success": true, "email": "..."}`

---

## ✅ You're Done!

Your automation is now live. Here's what happens:

1. Customer submits Tally form
2. Webhook fires instantly
3. Email sent to their address
4. You never touch an inbox again

---

## Updating the Email Template

Want to change the email? Super easy:

1. Open `api/webhook.js` in GitHub
2. Edit the `createEmailTemplate` function
3. Scroll to the bottom of the file
4. Click **Commit changes**
5. **Vercel auto-redeploys** (30 seconds)
6. Done!

No need to touch Vercel settings.

---

## Monitoring & Logs

**Check what's happening:**
1. Vercel dashboard → **Deployments** tab
2. Click the latest deployment
3. Click **Runtime Logs** tab
4. You'll see:
   - ✅ "Email sent to sophie@example.com"
   - ❌ Any errors with details

---

## Troubleshooting

### "Webhook returns 500 error"
Check Vercel logs (Deployments → Runtime Logs):
- **"Invalid login credentials"** → Gmail password is wrong
- **"Cannot find module nodemailer"** → Dependencies didn't install (redeploy)
- **"ECONNREFUSED"** → Network issue, wait a minute and retry

### "Test successful but no email arrives"
- Make sure `GMAIL_USER` matches the account you created the app password for
- Check spam/promotions folder in Gmail
- Verify `GMAIL_APP_PASSWORD` has no spaces

### "Environment variables not working"
- After adding env vars, **you must redeploy**
- Click **Deployments** → **Redeploy** on latest
- Wait 30-60 seconds

---

## Your Final Setup

✅ GitHub repo with all files  
✅ Vercel deployment live  
✅ Gmail sending confirmed  
✅ Tally webhook connected  
✅ Emails auto-sending  

**You now have:**
- Production-grade automation
- Zero maintenance
- Scales infinitely on free tier
- Full GitHub version history
- One-click rollback if needed

---

## Next: Customize

Whenever you want to:
- Change the email template
- Add new form fields
- Adjust styling
- Customize subject line

Just edit `api/webhook.js` in GitHub, commit, and Vercel auto-deploys.

---

## Questions?

You're all set! Your SHINSHŌ Kimono Dress pre-orders are automated. 🪡✨
