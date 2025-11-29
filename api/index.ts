import { createServer } from '../server/index';

// Create the express app once and reuse across invocations
const app = createServer();

// Export a handler compatible with Vercel's Node builder
export default function handler(req: any, res: any) {
  // Express apps are also valid request handlers: call it directly
  return (app as any)(req, res);
}
