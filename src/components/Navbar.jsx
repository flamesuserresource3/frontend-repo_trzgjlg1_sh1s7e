import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Selezione', href: '#selezione' },
    { label: 'Storia', href: '#storia' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">La Caneva Enoteca</a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contatti" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors">
              Prenota degustazione
            </a>
          </nav>

          <button aria-label="Apri menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg">Menu</span>
              <button aria-label="Chiudi menu" className="p-2" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-neutral-800">
                  {item.label}
                </a>
              ))}
              <a href="#contatti" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm">
                Prenota degustazione
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
