import { z } from 'zod';

import { HEXADECIMAL_COLOR_PATTERN } from '@/patterns';

export const categorySchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório.',
    })
    .min(3, {
      message: 'Nome deve ter pelo menos 3 caracteres.',
    })
    .max(50, {
      message: 'Nome deve ter no máximo 50 caracteres.',
    }),
  color: z.string().regex(HEXADECIMAL_COLOR_PATTERN, {
    message: 'Cor deve ser um hexadecimal válido.',
  }),
  isActive: z.boolean(),
});
