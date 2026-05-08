import Link from "next/link";

const sep = (
  <>
    {" "}
    <span aria-hidden>·</span>{" "}
  </>
);

export default function Footer() {
  return (
    <footer className="footer-app">
      <nav className="footer-app__nav" aria-label="Enlaces legales">
        <Link href="/privacy">Privacidad</Link>
        {sep}
        <Link href="/terms">Términos</Link>
        {sep}
        <Link href="/disclaimer">Descargo</Link>
        {sep}
        <Link href="/cookies">Cookies</Link>
        {sep}
        <Link href="/responsible-ai">IA responsable</Link>
      </nav>
    </footer>
  );
}
