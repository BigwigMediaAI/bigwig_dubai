"use client";

import { useEffect, useState } from "react";

interface Faq {
  _id: string;
  question: string;
  answer: string;
  isActive: boolean;
}

const FaqSection = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/faq`)
      .then((res) => res.json())
      .then((result) => {
        // If backend returns { success: true, data: [...] }
        setFaqs(result.data || []);
      })
      .catch((err) => {
        console.error("Error loading FAQs:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-[var(--text-muted)] text-sm">Loading FAQs...</div>
    );
  }

  return (
    <div className="space-y-3">
      {faqs
        .filter((faq) => faq.isActive)
        .map((item, index) => (
          <FAQAccordion
            key={item._id}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
    </div>
  );
};

export default FaqSection;

/* ================= ACCORDION ================= */

type FAQAccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionProps) {
  return (
    <div
      className={`rounded-xl border backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? "border-[var(--border-accent)] bg-[var(--bg-glass)]"
          : "border-[var(--border-light)] bg-[var(--bg-glass)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span
          className={`text-xl transition-colors ${
            isOpen
              ? "font-semibold text-[var(--accent-primary)]"
              : "font-medium text-[var(--text-primary)]"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border text-lg leading-none transition-all ${
            isOpen
              ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
              : "border-[var(--border-light)] text-[var(--text-muted)]"
          }`}
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 pb-4 text-sm text-[var(--text-secondary)]">
          {answer}
        </div>
      </div>
    </div>
  );
}
