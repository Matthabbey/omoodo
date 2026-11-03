import type { FaqItem } from "../types/home";
import type { SectionCopy } from "../types/home-copy";
import { BRAND_NAME } from "./brand";

export const FAQ_SECTION_ID = "faqs";

export const HOME_FAQ_COPY: SectionCopy = {
  eyebrow: "07 · Good to know",
  title: "Questions people ask before their first errand.",
  description: "Short answers to the things most people want settled before they hand something over.",
};

/** Answers are drawn from the site's own pricing, proof and process copy; nothing here is a new promise. */
export const HOME_FAQS: readonly FaqItem[] = [
  {
    question: "How do I make a request?",
    answer:
      "Fill in the short request form or tap WhatsApp us. Your answers are prepared as a WhatsApp message to our business number, and we reply there to confirm the details and give you a quote before any work starts.",
  },
  {
    question: "Where do you operate?",
    answer:
      "We work on the ground in Lagos, Abuja and Port Harcourt and can arrange support in other locations across Nigeria. Many of our customers live abroad and use us as their presence at home.",
  },
  {
    question: "What can you handle for me?",
    answer: `Five connected services: ${BRAND_NAME} Concierge for representation and property or family matters, Move for transport and airport transfers, Stay for accommodation, Home Care for laundry and everyday errands, and Shop for sourcing and procurement. Start with one, or combine them through Concierge.`,
  },
  {
    question: "How is pricing worked out?",
    answer:
      "Pricing reflects the nature, complexity and duration of each assignment: fixed fees for simple tasks, percentage-based fees for procurement and bookings, management fees for supervised projects, and retainers for ongoing support. You see the quote before you approve anything.",
  },
  {
    question: "Do you add a markup on things you buy for me?",
    answer:
      "No. Third-party costs such as vendor purchases are separated from our fees and passed on with itemised receipts, with zero markup.",
  },
  {
    question: "How will I know the job was done?",
    answer:
      "Every assignment leaves a trail you can check: timely updates while it is in progress, time-stamped photos, itemised receipts and a confirmed handover when it is complete.",
  },
  {
    question: "Can you support my parents or family at home while I am abroad?",
    answer:
      "Yes. Diaspora families are our speciality. We visit, run errands, supervise repairs, collect documents and coordinate purchases on your behalf, and keep you informed throughout.",
  },
];
