import Link from "next/link";

const footerStyle = {
  textAlign: "center",
  padding: "1.5rem 1rem 2rem",
  fontSize: "0.8rem",
  lineHeight: 1.6,
  color: "var(--foreground)",
  opacity: 0.85,
};

const linkStyle = {
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

const sep = " · ";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <nav aria-label="Enlaces legales">
        <Link href="/privacy" style={linkStyle}>
          Privacidad
        </Link>
        {sep}
        <Link href="/terms" style={linkStyle}>
          Términos
        </Link>
        {sep}
        <Link href="/disclaimer" style={linkStyle}>
          Descargo de responsabilidad
        </Link>
      </nav>
    </footer>
  );
}
