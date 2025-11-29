import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      return res.status(500).json({ success: false, error: 'Email credentials not configured on server' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111">
        <h3>Tiệm hoa có nàng nhận được 1 tin nhắn mới</h3>
        <p><strong>Khách hàng:</strong> ${name} (${email})</p>
        <p><strong>Tin nhắn:</strong></p>
        <blockquote style="background:#f8f8f8;padding:12px;border-left:4px solid #e6e6e6">${String(message)}</blockquote>
        <p style="color:#888;font-size:12px;margin-top:12px">This email was generated automatically by Tiệm hoa có nàng.</p>
      </div>
    `;

    const mailOptions = {
      from: gmailUser,
      to: 'sonlong2302@gmail.com',
      subject: `Tiệm hoa có nàng nhận được 1 tin nhắn mới từ ${name}`,
      html,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions as any);

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err: any) {
    const message = err?.message ?? 'Failed to send message';
    return res.status(500).json({ success: false, error: message });
  }
}
