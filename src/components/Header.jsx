import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          Horas y Sueldo
        </Link>
        <nav className="site-header__nav" aria-label="Navegación principal">
          <Link href="/" className="site-header__link">
            Inicio
          </Link>
          <Link href="/semana" className="site-header__link">
            Calculadora semanal
          </Link>
          <Link href="/mx/horas-extra" className="site-header__link">
            Calculadora de horas extra
          </Link>
        </nav>
      </div>
    </header>
  );
}
