export default function SeoContentBlock({
  title,
  paragraphs = [],
  faqItems = [],
}) {
  return (
    <article className="seo-block">
      <div className="seo-block__intro">
        <h2>{title}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="seo-block__faq">
        <h3 className="seo-block__faq-heading">Preguntas frecuentes</h3>
        <dl>
          {faqItems.map((item, index) => (
            <div key={index} className="seo-block__faq-item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
