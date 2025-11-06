function WineCard({ title, region, img, notes }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] w-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="font-medium text-neutral-900">{title}</h3>
          <span className="text-xs text-neutral-500">{region}</span>
        </div>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{notes}</p>
      </div>
    </div>
  );
}

export default function Selection() {
  const wines = [
    {
      title: 'Barolo DOCG',
      region: 'Piemonte',
      img: 'https://images.unsplash.com/photo-1527960471264-932f39eb5840?q=80&w=2070&auto=format&fit=crop',
      notes: 'Struttura elegante, tannini setosi, profumi di viola e sottobosco.',
    },
    {
      title: 'Amarone della Valpolicella',
      region: 'Veneto',
      img: 'https://images.unsplash.com/photo-1548851609-ef5e0fd9f1f5?q=80&w=2069&auto=format&fit=crop',
      notes: 'Intenso e avvolgente, frutta sotto spirito e spezie dolci.',
    },
    {
      title: 'Sauvignon Blanc',
      region: 'Friuli',
      img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2069&auto=format&fit=crop',
      notes: 'Agrumato e verticale, erbe aromatiche e finale minerale.',
    },
    {
      title: 'Champagne Brut',
      region: 'Reims',
      img: 'https://images.unsplash.com/photo-1561972531-c5490fb2c41b?q=80&w=2069&auto=format&fit=crop',
      notes: 'Perlage fine, equilibrio tra freschezza e complessità.',
    },
  ];

  return (
    <section id="selezione" className="py-16 sm:py-24 bg-neutral-50 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-neutral-900">La nostra selezione</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">Etichette ricercate, piccoli produttori e grandi annate. Raccontiamo il territorio attraverso il calice.</p>
          </div>
          <a href="#contatti" className="hidden sm:inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-white">Richiedi lista completa</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wines.map((w) => (
            <WineCard key={w.title} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}
