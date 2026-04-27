import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Введите имя (минимум 2 символа)'),
  phone: z
    .string()
    .min(18, 'Введите номер телефона полностью')
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Формат: +7 (___) ___-__-__'),
  service: z.string().min(1, 'Выберите услугу'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие на обработку данных',
  }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
