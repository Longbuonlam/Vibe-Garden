import express from 'express';

const app = express();
app.use(express.json());

let mounted = false;

async function initAndMountHandlers() {
  if (mounted) return;

  try {
    // Use dynamic ESM imports so this code works in Vercel's ESM environment.
    const placeMod = await import('./place-order');
    const contactMod = await import('./contact');
    const demoMod = await import('./demo');

    const placeOrderHandler = placeMod?.default ?? placeMod;
    const contactHandler = contactMod?.default ?? contactMod;
    const demoHandler = demoMod?.default ?? demoMod;

    if (demoHandler && typeof demoHandler === 'function') {
      app.get('/api/demo', demoHandler);
    }

    if (contactHandler && typeof contactHandler === 'function') {
      app.post('/api/contact', contactHandler);
    }

    if (placeOrderHandler && typeof placeOrderHandler === 'function') {
      app.post('/api/place-order', placeOrderHandler);
    }

    // Fallback
    app.all('/api/*', (_req, res) => {
      res.status(404).json({ success: false, error: 'API route not found' });
    });

    mounted = true;
  } catch (impErr: any) {
    // eslint-disable-next-line no-console
    console.error('Failed to import api handlers inside serverless wrapper:', impErr);
    throw impErr;
  }
}

export default async function handler(req: any, res: any) {
  try {
    if (!mounted) {
      await initAndMountHandlers();
    }

    return app(req, res);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Unhandled error in API wrapper invocation:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ success: false, error: String(err), stack: err?.stack }));
  }
}
