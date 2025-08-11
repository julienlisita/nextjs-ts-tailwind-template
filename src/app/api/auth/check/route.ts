import { checkAuthHandler } from '@/server/controllers/auth.controller';

export async function GET() {
  return checkAuthHandler();
}
