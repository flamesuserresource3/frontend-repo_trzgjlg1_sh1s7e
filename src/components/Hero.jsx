import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white opacity-80" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900">
              Enoteca di carattere nel cuore di Velden
            </h1>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl">
              Una selezione curata di vini italiani e internazionali, distillati artigianali e prodotti gastronomici d’eccellenza. Degustazioni intime e consulenza su misura per ogni occasione.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#selezione" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors">
                Scopri la selezione
              </a>
              <a href="#contatti" className="inline-flex items-center rounded-full border border-neutral-300 text-neutral-900 px-5 py-3 text-sm hover:bg-neutral-100 transition-colors">
                Prenota una degustazione
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-1 text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span>Clienti soddisfatti e cantina in continua evoluzione</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
