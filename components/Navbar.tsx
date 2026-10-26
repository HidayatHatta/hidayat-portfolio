'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/projects';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // menyusut saat di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // mendeteksi section yang sedang dibaca (hanya di halaman utama)
  useEffect(() => {
    if (!isHome) {
      setActive('');
      return;
    }
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setActive(links.find((l) => visible.has(l.id))?.id ?? '');
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome]);

  const label = pathname.startsWith('/projects') ? 'Projects' : (links.find((l) => l.id === active)?.label ?? 'Home');

  return (
    <header className="island-wrap">
      <nav className={`island ${scrolled ? 'compact' : ''} ${open ? 'open' : ''}`} aria-label="Main">
        <div className="island-bar">
          <Link href="/" className="island-brand" onClick={() => setOpen(false)}>
            <span className="island-dot" aria-hidden="true" />
            Hidayat
          </Link>

          {/* label section aktif, tampil saat pill menyusut */}
          <div className="island-label" aria-hidden="true">
            <span>{label}</span>
          </div>

          {/* link desktop, tampil saat pill melebar */}
          <div className="island-links">
            <ul>
              {links.map((l) => (
                <li key={l.id}>
                  <Link href={`/#${l.id}`} className={active === l.id ? 'active' : ''}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={profile.cv} download className="island-cv">
                  CV ↓
                </a>
              </li>
            </ul>
          </div>

          <button type="button" className="island-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
          </button>
        </div>

        {/* menu mobile */}
        <div className="island-menu">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <Link href={`/#${l.id}`} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.cv} download className="island-cv">
                Download CV ↓
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
