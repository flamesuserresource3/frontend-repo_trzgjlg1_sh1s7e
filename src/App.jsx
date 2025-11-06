import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Selection from './components/Selection';
import Story from './components/Story';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} La Caneva Enoteca — Tutti i diritti riservati.</p>
        <div className="text-sm text-neutral-500">P.IVA IT00000000000 • Orari: Mar–Sab 11:00–20:00</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Selection />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
