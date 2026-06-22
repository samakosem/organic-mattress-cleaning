interface AnswerItem {
  q: string;
  a: string;
}

interface AnswerBlockProps {
  items: AnswerItem[];
  heading?: string;
}

/**
 * Direct, plain-text Q&A block (not a collapsed accordion) so AI search /
 * answer engines can read question-answer pairs without interaction.
 * Distinct from FaqSection, which is for the broader on-page FAQ accordion.
 */
export function AnswerBlock({ items, heading = "Quick Answers" }: AnswerBlockProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 bg-surface border-t border-primary/10" aria-labelledby="answer-block-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <h2 id="answer-block-heading" className="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
          {heading}
        </h2>
        <div className="space-y-7">
          {items.map((item) => (
            <div key={item.q}>
              <h3 className="text-base font-bold text-primary-dark mb-1.5">{item.q}</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
