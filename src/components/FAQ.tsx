import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What services does Servsy provide?",
    answer: "Servsy provides comprehensive after-sales services for home appliances, electronics, gadgets, and IT products. This includes air coolers, LED TVs, washing machines, refrigerators, laptops, smartphones, printers, networking equipment, and more. Our services include installation, repair, maintenance, warranty service, software updates, diagnostics, spare parts management, and annual maintenance contracts (AMC)."
  },
  {
    question: "How extensive is Servsy's service network?",
    answer: "Servsy has a pan-India service network covering 19,000+ PIN codes with 500+ service centers strategically located across the country. This extensive coverage allows us to provide prompt service in most areas of India."
  },
  {
    question: "How quickly can I expect service after placing a request?",
    answer: "We pride ourselves on our quick turnaround time. In most areas, we respond to service requests within 24-48 hours. The exact timing may vary based on your location and the complexity of the service required."
  },
  {
    question: "Does Servsy work directly with appliance brands?",
    answer: "Yes, Servsy partners with numerous home appliance brands, OEMs, and retailers to provide authorized after-sales service. We serve as the official service partner for many leading brands in India."
  },
  {
    question: "How can I check if Servsy provides service in my area?",
    answer: "You can check service availability in your area by entering your PIN code in the coverage checker on our website. Alternatively, you can contact our customer support team who will verify service availability for you."
  },
  {
    question: "Do you provide warranty service for appliances?",
    answer: "Yes, we provide warranty service for appliances from our partner brands. We also offer out-of-warranty repair services at competitive rates."
  },
  {
    question: "How are Servsy's technicians trained?",
    answer: "All our technicians undergo rigorous training programs specific to each appliance category. They are trained directly by brand manufacturers to ensure they meet the highest standards of technical expertise and service quality."
  },
  {
    question: "How can brands partner with Servsy for after-sales service?",
    answer: "Brands looking to partner with Servsy can reach out through our 'Partner with Us' form or contact our business development team directly. We offer customizable service packages tailored to each brand's specific requirements."
  },
  {
    question: "What types of electronics and IT products do you service?",
    answer: "We service a wide range of electronics and IT products including laptops, desktop computers, printers, scanners, smartphones, tablets, audio systems, home theaters, gaming consoles, networking equipment like routers, UPS/inverters, and CCTV/security systems. Our technicians are trained to handle repairs, installations, and maintenance for all these product categories."
  },
  {
    question: "Do you offer software-related services for electronic devices?",
    answer: "Yes, we provide software-related services including operating system installation, software updates, data recovery, virus removal, and general troubleshooting for laptops, desktops, smartphones, and other electronic devices. Our technicians are trained to handle both hardware and software issues."
  },
  {
    question: "What are the benefits for brands outsourcing after-sales service to Servsy?",
    answer: "Brands benefit from our established nationwide service network (500+ centers), trained technicians, cost-effective pay-per-service model, reduced operational complexity, enhanced customer experience, scalable service infrastructure, and transparent reporting and analytics. This allows brands to focus on their core business while we handle the entire after-sales service ecosystem."
  },
  {
    question: "How do you ensure quality service across different product categories?",
    answer: "We maintain quality through rigorous technician training programs specific to each product category, regular skill assessments, quality audits, customer feedback monitoring, and continuous improvement processes. Our technicians receive product-specific training directly from manufacturers to ensure they meet the highest standards of technical expertise."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;