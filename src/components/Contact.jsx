import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="py-16 sm:py-24 bg-neutral-50 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-neutral-900">Visita la nostra enoteca</h2>
            <p className="mt-4 text-neutral-700 max-w-xl">Siamo a Velden am Wörthersee. Prenota una degustazione privata o chiedi una consulenza per la tua cantina: risponderemo entro 24 ore.</p>

            <div className="mt-8 space-y-4 text-neutral-700">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-neutral-900" /> Seecorso 12, 9220 Velden am Wörthersee, Austria</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-neutral-900" /> +43 012 345 678</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-neutral-900" /> info@lacanevaenoteca.it</p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-600">Nome</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div>
                <label className="block text-sm text-neutral-600">Cognome</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-600">Messaggio</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto">Invia richiesta</button>
            <p className="mt-3 text-xs text-neutral-500">Compilando il form acconsenti al trattamento dei dati secondo la nostra privacy policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
