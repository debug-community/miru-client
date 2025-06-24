import { z } from 'zod';
import { LoginProvider } from '@/feature/login/api/LoginProvider.enum.ts';

export const LoginSchema = z.object({
  provider: z.nativeEnum(LoginProvider),
});
export type LoginFormData = z.infer<typeof LoginSchema>;

export const login = async (data: LoginFormData) => {
  alert(`provider: ${data.provider}`);
};
