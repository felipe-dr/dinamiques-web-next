import { z } from 'zod';

import { URL_PATTERN } from '@/patterns';

export const articleSchema = z.object({
  teacherId: z.string().min(1, {
    message: 'Id do docente é obrigatório.',
  }),
  categoryId: z.string().min(1, {
    message: 'Categoria é obrigatória.',
  }),
  title: z
    .string()
    .min(1, {
      message: 'Título é obrigatório.',
    })
    .min(3, {
      message: 'Título deve ter pelo menos 3 caracteres.',
    })
    .max(150, {
      message: 'Título deve ter no máximo 150 caracteres.',
    }),
  summary: z
    .string()
    .min(1, {
      message: 'Resumo é obrigatório.',
    })
    .min(10, {
      message: 'Resumo deve ter pelo menos 10 caracteres.',
    })
    .max(200, {
      message: 'Resumo deve ter no máximo 200 caracteres.',
    }),
  readingTime: z.coerce.number().positive({
    message: 'Tempo de leitura deve ser maior que 0.',
  }),
  content: z.string().min(1, {
    message: 'Conteúdo é obrigatório.',
  }),
  highlightImageUrl: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        return URL_PATTERN.test(value);
      },
      {
        message: 'URL da imagem de destaque deve ser uma URL válida.',
      },
    ),
  isPublished: z.boolean(),
});
