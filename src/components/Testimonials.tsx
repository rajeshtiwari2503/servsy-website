import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Servsy has transformed our after-sales service operations. Their nationwide coverage and quick response time have significantly improved our customer satisfaction ratings.",
    author: "Rajesh Kumar",
    role: "Head of Customer Service",
    company: "HomeAppliances India Ltd.",
    avatarUrl: ""
  },
  {
    quote: "As a growing air cooler brand, managing service requests across India was challenging. Partnering with Servsy gave us instant access to a reliable service network that our customers love.",
    author: "Priya Sharma",
    role: "Operations Director",
    company: "CoolBreeze Appliances",
    avatarUrl: ""
  },
  {
    quote: "The technical expertise of Servsy's team is outstanding. They handle our LED TV installations professionally, and customer feedback has been overwhelmingly positive.",
    author: "Vikram Singh",
    role: "CEO",
    company: "VisualTech Electronics",
    avatarUrl: ""
  },
  {
    quote: "Servsy's spare parts management system has streamlined our operations. We've reduced service delays by 60% since partnering with them.",
    author: "Ananya Patel",
    role: "Supply Chain Manager",
    company: "HomeComfort Appliances",
    avatarUrl: ""
  },
  {
    quote: "The team at Servsy understands the importance of timely service. Their technicians are well-trained and represent our brand values perfectly during customer interactions.",
    author: "Suresh Menon",
    role: "Brand Manager",
    company: "ElectroHome India",
    avatarUrl: ""
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, avatarUrl }) => {
  const initials = author.split(' ').map(name => name[0]).join('');
  
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="none" className="text-primary/20">
            <path d="M13.95 36L0 25.2V21.6L9 0H15.75L9.9 21.6H18V36H13.95ZM40.95 36L27 25.2V21.6L36 0H42.75L36.9 21.6H45V36H40.95Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-muted-foreground flex-grow mb-6">{quote}</p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-3">
            {avatarUrl ? <AvatarImage src={avatarUrl} alt={author} /> : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                <div className="p-1 h-full">
                  <Testimonial {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;