import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export function SupportCommunication() {
  const [faqs, setFaqs] = React.useState<FAQ[]>([
    {
      question: 'What color should you choose as a primary?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Nunc aliquip tempor et. Tempus et fugiat to lacus ut pellentesque nec nec est. Tempus et nunc et pellentesque nec nec est. Tempus et nunc et pellentesque nec nec est. Tempus et nunc et pellentesque nec nec est.',
      isOpen: true
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur...',
      isOpen: false
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur...',
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen
    })));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-white">Support & Communication</h2>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-white">FREQUENTLY ASKED QUESTIONS</h3>
        <p className="text-gray-400">Have any questions? Read popular answers below</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-[#2E2E2E] rounded-lg p-4 ${faq.isOpen ? 'border-l-4 border-green-500' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-gray-400 transform transition-transform ${
                    faq.isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {faq.isOpen && (
                <p className="mt-4 text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Technical Assistance</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Nunc non port amet leo vel elementum. Et ut maecenas ornare. 
          Turtor mattis morbi bibendum quam neque lorem mattifer pellentesque. Id diam sem eu rhoncus 
          pharetra.
        </p>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Contact Now
        </button>
      </div>
    </div>
  );
}