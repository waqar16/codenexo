'use client'

import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What does a typical project timeline look like?",
      answer: "Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the discovery phase and maintain transparent communication throughout development."
    },
    {
      question: "What's your minimum project size?",
      answer: "We work with projects starting from $2,000, typically for MVPs or smaller integrations. For comprehensive solutions involving AI, automation, or custom software, projects usually start at $5,000+. We're flexible and can discuss options that fit your budget."
    },
    {
      question: "Can we start with a small MVP?",
      answer: "Absolutely! We love building MVPs. Starting small allows you to validate your idea, gather user feedback, and iterate quickly. We'll help you identify the core features needed for launch and plan for future scalability."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we provide ongoing maintenance, support, and feature development. We offer flexible retainer packages or pay-as-you-go support depending on your needs. This includes bug fixes, updates, monitoring, and continuous improvements."
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We specialize in modern web technologies (React, Next.js, Node.js), AI/ML frameworks (TensorFlow, PyTorch, OpenAI), cloud platforms (AWS, Azure, GCP), embedded systems (Arduino, Raspberry Pi), and mobile development (React Native). We choose the right stack based on your specific requirements."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#0b1020] to-[#041025] text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
            Quick answers to common questions about working with CodeNexo
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 text-yellow-400">
                  {openIndex === index ? (
                    <FaChevronUp className="text-xl" />
                  ) : (
                    <FaChevronDown className="text-xl" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactFAQ
