import express from 'express';

// Import API handlers that live inside the `api/` folder so Vercel bundles them.
// These files export default request handlers compatible with (req,res).
let placeOrderHandler: any;
let contactHandler: any;
let demoHandler: any;

try {
  // Use relative imports so the builder includes these files in the function bundle
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  placeOrderHandler = require('./place-order').default;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  contactHandler = require('./contact').default;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  demoHandler = require('./demo').default;
} catch (impErr: any) {
  // eslint-disable-next-line no-console
  console.error('Failed to require api handlers inside serverless wrapper:', impErr);
}

// Build a minimal express app and mount the handlers under /api/* paths.
const app = express();
app.use(express.json());

if (demoHandler) {
  app.get('/api/demo', demoHandler);
}

if (contactHandler) {
  app.post('/api/contact', contactHandler);
}

if (placeOrderHandler) {
  app.post('/api/place-order', placeOrderHandler);
}

// Fallback route
app.all('/api/*', (_req, res) => {
  res.status(404).json({ success: false, error: 'API route not found' });
});

export default function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Unhandled error in API wrapper invocation:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ success: false, error: String(err), stack: err?.stack }));
  }
}
