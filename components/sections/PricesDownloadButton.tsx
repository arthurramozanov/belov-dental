'use client';

import { toast } from 'sonner';

export function PricesDownloadButton() {
  return (
    <button
      type="button"
      onClick={() => toast.success('Прайс-лист отправлен в WhatsApp')}
      className="border border-ink text-ink rounded-full px-8 py-4 text-base font-medium transition-colors duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
    >
      Получить полный прайс-лист
    </button>
  );
}
