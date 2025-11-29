import { createServer } from '../server/index';

// Create the express app once and reuse across invocations
let app: any;

try {
  app = createServer();
} catch (initErr: any) {
  // If initialization fails, log and keep app undefined — handler will return error
  // eslint-disable-next-line no-console
  console.error('Failed to initialize Express app in serverless wrapper:', initErr);
}

// Export a handler compatible with Vercel's Node builder
export default function handler(req: any, res: any) {
  try {
    if (!app) {
      const msg = 'Server not initialized';
      // eslint-disable-next-line no-console
      console.error(msg);
      res.statusCode = 500;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ success: false, error: msg }));
      return;
    }

    // Call the express app as a request handler
    return app(req, res);
  } catch (err: any) {
    // Log error and return stack to help debugging (remove in production)
    // eslint-disable-next-line no-console
    console.error('Unhandled error in serverless wrapper:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ success: false, error: String(err), stack: err?.stack }));
  }
}
