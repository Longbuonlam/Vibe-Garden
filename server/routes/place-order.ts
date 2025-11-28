import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  zipCode: string;
}

interface OrderRequestBody {
  shippingInfo: ShippingInfo;
  cartItems: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { shippingInfo, cartItems, subtotal, tax, total } = req.body as OrderRequestBody;

    if (!shippingInfo || !cartItems || !Array.isArray(cartItems)) {
      return res.status(400).json({ success: false, error: 'Invalid request body' });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      return res.status(500).json({ success: false, error: 'Email credentials not configured on server' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const customerName = `${shippingInfo.firstName} ${shippingInfo.lastName}`;

    // Build products table rows
    const rows = cartItems
      .map((item) => {
        const lineTotal = (item.price * item.quantity).toFixed(2);
        return `
          <tr>
            <td style="padding:6px 12px;border:1px solid #e6e6e6">${item.name}</td>
            <td style="padding:6px 12px;border:1px solid #e6e6e6;text-align:center">${item.quantity}</td>
            <td style="padding:6px 12px;border:1px solid #e6e6e6;text-align:right">$${item.price.toFixed(2)}</td>
            <td style="padding:6px 12px;border:1px solid #e6e6e6;text-align:right">$${lineTotal}</td>
          </tr>`;
      })
      .join('');

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#111">
        <h2 style="margin-bottom:4px">New Order from ${customerName}</h2>
        <p style="color:#555;margin-top:0">Customer email: <a href="mailto:${shippingInfo.email}">${shippingInfo.email}</a> · Phone: ${shippingInfo.phone}</p>

        <h3 style="margin-bottom:8px">Order Details</h3>
        <table style="border-collapse:collapse;width:100%;max-width:720px">
          <thead>
            <tr>
              <th style="padding:8px 12px;border:1px solid #e6e6e6;text-align:left;background:#f6f6f6">Product</th>
              <th style="padding:8px 12px;border:1px solid #e6e6e6;background:#f6f6f6">Qty</th>
              <th style="padding:8px 12px;border:1px solid #e6e6e6;background:#f6f6f6">Price</th>
              <th style="padding:8px 12px;border:1px solid #e6e6e6;background:#f6f6f6">Total</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div style="max-width:720px;margin-top:16px;padding:12px;border:1px solid #f0f0f0;background:#fafafa">
          <p style="margin:6px 0"><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
          <p style="margin:6px 0"><strong>Tax:</strong> $${tax.toFixed(2)}</p>
          <p style="margin:6px 0;font-size:1.1em"><strong>Final Total:</strong> $${total.toFixed(2)}</p>
        </div>

        <h3 style="margin-top:18px">Shipping Information</h3>
        <div style="max-width:720px;padding:12px;border:1px solid #f0f0f0">
          <p style="margin:4px 0"><strong>Name:</strong> ${customerName}</p>
          <p style="margin:4px 0"><strong>Address:</strong> ${shippingInfo.address}, ${shippingInfo.district}, ${shippingInfo.city}, ${shippingInfo.zipCode}</p>
          <p style="margin:4px 0"><strong>Phone:</strong> ${shippingInfo.phone}</p>
          <p style="margin:4px 0"><strong>Email:</strong> ${shippingInfo.email}</p>
        </div>

        <p style="color:#888;font-size:12px;margin-top:18px">This email was generated automatically by Tiệm hoa có nàng.</p>
      </div>
    `;

    const mailOptions = {
      from: gmailUser,
      to: 'sonlong2302@gmail.com',
      subject: `New order from ${customerName} — $${total.toFixed(2)}`,
      html,
      replyTo: shippingInfo.email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Order placed successfully' });
  } catch (err: any) {
    const message = err?.message ?? 'Unknown error';
    return res.status(500).json({ success: false, error: message });
  }
});

export default router;
