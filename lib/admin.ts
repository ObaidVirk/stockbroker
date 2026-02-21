import { timingSafeEqual } from 'crypto';

export interface AdminUser {
  id: number;
  email: string;
  fullName: string;
  isAdmin: true;
}

export async function verifyAdminCredentials(
  email: string,
  password: string
): Promise<AdminUser | null> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME || 'Admin User';

  if (!adminEmail || !adminPassword) {
    console.error('ADMIN_EMAIL or ADMIN_PASSWORD is not set in environment variables.');
    return null;
  }

  // Constant-time comparisons to prevent timing attacks
  const emailMatch = timingSafeEqual(
    Buffer.from(email),
    Buffer.from(adminEmail)
  );
  const passwordMatch = timingSafeEqual(
    Buffer.from(password),
    Buffer.from(adminPassword)
  );

  if (!emailMatch || !passwordMatch) {
    return null;
  }

  return {
    id: 1,
    email: adminEmail,
    fullName: adminName,
    isAdmin: true,
  };
}
