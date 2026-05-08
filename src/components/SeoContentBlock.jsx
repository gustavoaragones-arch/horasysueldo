export default function SeoContentBlock({
  title,
  paragraphs = [],
  faqItems = [],
}) {
  return (
    <article className="seo-block">
      <h2>{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <h3 className="seo-block__faq-heading">Preguntas frecuentes</h3>
      <dl>
        {faqItems.map((item, index) => (
          <div key={index}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
