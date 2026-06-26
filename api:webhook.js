/**
 * Vercel Serverless Function: Tally → Gmail Email Automation
 * Deploy as: /api/webhook.js
 */

import nodemailer from 'nodemailer';

// ===== GMAIL SETUP =====
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ===== EMAIL TEMPLATE =====
const createEmailTemplate = (formData) => {
  const {
    'Your Name': name = 'Valued Creator',
    'Your E-mail': email = '',
    'Instagram Nickname (@…)': instagram = '',
    'Your Country and City': location = '',
    'How did you find me?': source = '',
    'What size would you want to buy': size = '',
    'What fabric would you prefer?': fabric = '',
  } = formData;

  const fabricLabel = fabric === 'A' ? 'Cotton / Linen —> firm yet breathable' 
                    : fabric === 'B' ? 'Viscose —> flowing and silky'
                    : 'To be confirmed';

  const country = location.includes(',') ? location.split(',')[location.split(',').length - 1].trim() : location;

  return {
    subject: `Thank you for joining the SHINSHŌ Kimono Dress pre-order!`,
    html: `
      <div style="font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #2a2a2a; line-height: 1.6;">
        
        <div style="padding: 40px 20px;">
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">Hi ${name},</p>
          
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            I am Kristina Kvon. You have joined the pre-order list for a kimono dress I made recently, and I wanted to reach out and say thank you. Not just for joining the pre-order list, but for your trust in me and my work. It means the whole world to me!
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            <strong>Here are your order details:</strong><br>
            ✦ Preferred Fabric: ${fabricLabel}<br>
            ✦ Size: ${size}<br>
            ✦ Location: ${location}
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 13px; margin: 0 0 5px 0; font-weight: 500; color: #8fa3a8; letter-spacing: 1px;">❈ DELIVERY TIMELINE</p>
          <p style="font-size: 14px; margin: 0 0 15px 0; line-height: 1.8;">
            Each piece is intended to be made by hand with meticulous attention to detail. However, due to the increased interest in purchasing this piece, the sewing process may take a bit longer than initially anticipated, approximately 10-15 days.
          </p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            According to the post office's official guidelines, the delivery from South Korea to ${country} might take about 15 days (at most🤞🏻). But i will surely let you know the details after shipping.
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 13px; margin: 0 0 5px 0; font-weight: 500; color: #8fa3a8; letter-spacing: 1px;">❈ PRICE</p>
          <p style="font-size: 14px; margin: 0 0 15px 0; line-height: 1.8;">
            The price is $249 (including shipping costs).
          </p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8; font-size: 13px; color: #666;">
            *Please be informed that there may be additional expenses associated with receiving the packaging, as per your country's regulations. While these expenses are unlikely to be significant, I wanted to ensure that you are aware of this possibility. I will need to double-check this matter once again.*
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 13px; margin: 0 0 5px 0; font-weight: 500; color: #8fa3a8; letter-spacing: 1px;">❈ PAYMENT PROCESS</p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            The payment may be processed via the PayPal payment system since it operates in most countries.
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 13px; margin: 0 0 5px 0; font-weight: 500; color: #8fa3a8; letter-spacing: 1px;">❈ PRODUCT VIEW</p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            Unfortunately, I didn't have a chance to make a professional photo and video to show the dress's details and texture yet, but maybe this preview link with some images that i have will be helpful for your review: <a href="https://kristinakvon.com/shinsho-kimono-dress" style="color: #8fa3a8; text-decoration: none;">https://kristinakvon.com/shinsho-kimono-dress</a>.
          </p>

          <p style="font-size: 12px; color: #8fa3a8; margin: 30px 0; letter-spacing: 3px; text-align: center;">.....................................................</p>

          <p style="font-size: 14px; margin: 0 0 15px 0; line-height: 1.8;">
            Please feel free to ask any questions.
          </p>
          <p style="font-size: 14px; margin: 0 0 15px 0; line-height: 1.8;">
            If you would like to place an order, you can simply reply to this email, and I will send you the link for payment.
          </p>
          <p style="font-size: 14px; margin: 0 0 15px 0; line-height: 1.8;">
            Due to the timezone differences and manual management i may be replying a bit slower, but I will get back to you as soon as i can.
          </p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            Anyway, thank you again for your support, I appreciate that so much 🫶🏻 and i hope you have a beautiful day!
          </p>
          <p style="font-size: 14px; margin: 0 0 20px 0; line-height: 1.8;">
            Sending big hugs from Seoul:)
          </p>

          <p style="font-size: 14px; margin: 20px 0 0 0; line-height: 1.8;">
            Warmly, Kristina.<br>
            <span style="font-size: 12px; color: #999;">
              ...........................
            </span>
          </p>
        </div>

        <div style="padding: 20px; background: #f9f9f9; text-align: center; border-top: 1px solid #e5e5e5; font-size: 12px; color: #999;">
          <p style="margin: 0;">
            IG: <a href="https://instagram.com/kvonnah.me" style="color: #8fa3a8; text-decoration: none;">@kvonnah.me</a> | 
            email: <a href="mailto:hello@kristinakvon.com" style="color: #8fa3a8; text-decoration: none;">hello@kristinakvon.com</a>
          </p>
        </div>

      </div>
    `,
  };
};

// Track sent emails (in-memory; resets on redeploy)
const sentEmails = new Set();

// ===== VERCEL SERVERLESS FUNCTION =====
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body.data || req.body || {};
    const email = formData['Your E-mail'] || formData.email || '';

    // Validate email
    if (!email || !email.includes('@')) {
      console.log('❌ No valid email in submission');
      return res.status(400).json({ error: 'No email provided' });
    }

    // Prevent duplicate sends
    if (sentEmails.has(email)) {
      console.log(`⚠️  Email already sent to ${email}`);
      return res.status(200).json({ message: 'Email already sent to this address' });
    }

    // Create email
    const { subject, html } = createEmailTemplate(formData);

    // Send email
    await transporter.sendMail({
      from: `"aerah" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subject,
      html: html,
    });

    sentEmails.add(email);
    console.log(`✅ Email sent to ${email}`);

    return res.status(200).json({ 
      success: true, 
      email,
      message: 'Confirmation email sent successfully'
    });

  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    return res.status(500).json({ 
      error: error.message,
      details: 'Failed to send email. Check Vercel logs.'
    });
  }
}
