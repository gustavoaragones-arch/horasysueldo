const proseStyle = {
  maxWidth: "42rem",
  width: "100%",
};

const h2Style = {
  fontSize: "1.25rem",
  fontWeight: 700,
  lineHeight: 1.3,
  marginBottom: "1rem",
  marginTop: "0.25rem",
};

const paragraphStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  marginBottom: "0.85rem",
  color: "var(--foreground)",
};

const faqHeadingStyle = {
  fontSize: "1.1rem",
  fontWeight: 700,
  lineHeight: 1.3,
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
};

const faqDlStyle = {
  margin: 0,
  padding: 0,
};

const faqDtStyle = {
  fontSize: "0.95rem",
  fontWeight: 600,
  lineHeight: 1.45,
  marginTop: "1rem",
  marginBottom: "0.35rem",
};

const faqDtFirstStyle = {
  ...faqDtStyle,
  marginTop: 0,
};

const faqDdStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  margin: "0 0 0.85rem",
  padding: 0,
  color: "var(--foreground)",
};

export default function SeoContentBlock({ title, paragraphs = [], faqItems = [] }) {
  return (
    <article style={proseStyle}>
      <h2 style={h2Style}>{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index} style={paragraphStyle}>
          {text}
        </p>
      ))}
      <h3 style={faqHeadingStyle}>Preguntas frecuentes</h3>
      <dl style={faqDlStyle}>
        {faqItems.map((item, index) => (
          <div key={index}>
            <dt style={index === 0 ? faqDtFirstStyle : faqDtStyle}>
              {item.question}
            </dt>
            <dd style={faqDdStyle}>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
