'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { bookingSchema, type BookingFormData } from '@/lib/validations';
import { SERVICE_OPTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  let local = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;
  local = local.slice(0, 10);

  if (!local) return '+7';

  let out = '+7 (' + local.slice(0, 3);
  if (local.length <= 3) return out;

  out += ') ' + local.slice(3, 6);
  if (local.length <= 6) return out;

  out += '-' + local.slice(6, 8);
  if (local.length <= 8) return out;

  out += '-' + local.slice(8, 10);
  return out;
}

type FieldErrorProps = { message?: string };

function FieldError({ message }: FieldErrorProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          key="error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-red-500 mt-1"
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function BookingForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '+7',
      service: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success('Заявка принята. Перезвоним в течение часа');
    reset();
  };

  const inputClass =
    'border-sand rounded-xl bg-white focus:border-forest focus:ring-2 focus:ring-forest/20 h-12 text-base text-ink placeholder:text-ink-muted/60';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Имя */}
      <div>
        <Label htmlFor="booking-name" className="text-sm font-medium text-ink mb-2 block">
          Имя
        </Label>
        <Input
          id="booking-name"
          placeholder="Ваше имя"
          className={cn(inputClass, errors.name && 'border-red-400')}
          aria-describedby={errors.name ? 'booking-name-error' : undefined}
          {...register('name')}
        />
        <span id="booking-name-error">
          <FieldError message={errors.name?.message} />
        </span>
      </div>

      {/* Телефон */}
      <div>
        <Label htmlFor="booking-phone" className="text-sm font-medium text-ink mb-2 block">
          Телефон
        </Label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              id="booking-phone"
              inputMode="tel"
              placeholder="+7 (___) ___-__-__"
              className={cn(inputClass, errors.phone && 'border-red-400')}
              aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
              value={field.value}
              onChange={(e) => field.onChange(formatPhone(e.target.value))}
              onBlur={field.onBlur}
            />
          )}
        />
        <span id="booking-phone-error">
          <FieldError message={errors.phone?.message} />
        </span>
      </div>

      {/* Услуга */}
      <div>
        <Label htmlFor="booking-service" className="text-sm font-medium text-ink mb-2 block">
          Услуга
        </Label>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="booking-service"
                className={cn(
                  inputClass,
                  'w-full',
                  errors.service && 'border-red-400',
                )}
                aria-describedby={errors.service ? 'booking-service-error' : undefined}
              >
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <span id="booking-service-error">
          <FieldError message={errors.service?.message} />
        </span>
      </div>

      {/* Сообщение */}
      <div>
        <Label htmlFor="booking-message" className="text-sm font-medium text-ink mb-2 block">
          Сообщение{' '}
          <span className="text-ink-muted font-normal">(необязательно)</span>
        </Label>
        <Textarea
          id="booking-message"
          placeholder="Опишите вашу ситуацию или пожелания"
          rows={4}
          className={cn(
            'border-sand rounded-xl bg-white focus:border-forest focus:ring-2 focus:ring-forest/20 text-base text-ink placeholder:text-ink-muted/60 resize-none',
          )}
          {...register('message')}
        />
      </div>

      {/* Согласие */}
      <div>
        <div className="flex items-start gap-3">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="booking-consent"
                checked={field.value}
                onCheckedChange={field.onChange}
                className={cn(
                  'mt-0.5 border-sand data-[state=checked]:bg-forest data-[state=checked]:border-forest',
                  errors.consent && 'border-red-400',
                )}
                aria-describedby={errors.consent ? 'booking-consent-error' : undefined}
              />
            )}
          />
          <Label
            htmlFor="booking-consent"
            className="text-sm text-ink-muted leading-snug cursor-pointer"
          >
            Согласен на обработку персональных данных
          </Label>
        </div>
        <span id="booking-consent-error" className="pl-7 block">
          <FieldError message={errors.consent?.message} />
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full rounded-full bg-forest text-white px-8 py-4 text-base font-medium tracking-[0.01em] transition-all duration-200',
          'hover:bg-forest-dark hover:scale-[1.02]',
          'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2',
        )}
      >
        {isSubmitting ? 'Отправляем...' : 'Записаться'}
      </button>
    </form>
  );
}
