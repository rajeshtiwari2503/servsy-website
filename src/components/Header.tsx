import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Clock, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handlePartnerClick = () => {
    router.push("/#contact");
  };

  const handleBookServiceClick = () => {
    // Scroll to the quick service request form
    const element = document.querySelector(".quick-service-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-black text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                <span>+91 9266985775</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Mon-Sat: 9AM - 6PM</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>500+ Service Centers Across India</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div 
        className={`w-full border-b bg-background transition-all duration-300 ${
          scrolled ? 'shadow-md py-2' : 'py-4'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#services" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Our Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#coverage" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Service Network</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#brands" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Our Partners</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium relative group"
            >
              <span className="group-hover:text-primary transition-colors">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handlePartnerClick}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Partner with Us
              </Button>
              <Button 
                size="sm" 
                className="ml-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={handleBookServiceClick}
              >
                Book a Service
              </Button>
            </div>
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="mt-6 mb-8">
                    <Logo />
                  </div>
                  <div className="flex flex-col space-y-5 mt-8">
                    <Link href="/" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Home
                    </Link>
                    <Link href="#services" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Our Services
                    </Link>
                    <Link href="#coverage" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Service Network
                    </Link>
                    <Link href="#about" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      About Us
                    </Link>
                    <Link href="#brands" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Our Partners
                    </Link>
                    <Link href="/blog" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Blog
                    </Link>
                    <Link href="/contact" className="text-base font-medium hover:text-primary transition-colors flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Contact
                    </Link>
                    
                    <div className="pt-6 space-y-3">
                      <Button variant="outline" className="w-full rounded-full" onClick={handlePartnerClick}>Partner with Us</Button>
                      <Button className="w-full rounded-full" onClick={handleBookServiceClick}>Book a Service</Button>
                    </div>
                    
                    <div className="pt-6 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>+91 9266985775</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Mon-Sat: 9AM - 6PM</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;