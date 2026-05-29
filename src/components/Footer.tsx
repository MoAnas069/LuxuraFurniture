import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lux-bg-alt border-t border-lux-border py-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-serif tracking-widest uppercase mb-6 block">
            Luxura
          </Link>
          <p className="text-lux-text-muted max-w-sm font-sans leading-relaxed">
            Luxury, composed with intention. Global sourcing and bespoke interiors curated for refined living.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Explore</h4>
          <ul className="flex flex-col gap-4">
            {["Collections", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-lux-text-muted hover:text-lux-gold transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Inquiries</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-lux-text-muted">concierge@luxura.com</li>
            <li className="text-lux-text-muted">+1 (800) LUX-URA</li>
            <li className="text-lux-text-muted mt-4">London • New York • Dubai</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-lux-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-lux-text-muted">
        <p>&copy; {new Date().getFullYear()} Luxura. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-lux-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-lux-gold transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
