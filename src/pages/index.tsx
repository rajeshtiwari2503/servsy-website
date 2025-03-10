import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CoverageMap from "@/components/CoverageMap";
import ContactForm from "@/components/ContactForm";
import BlogPreview from "@/components/BlogPreview";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Servsy - India's #1 After-Sales Service Provider for Home Appliances, Electronics & IT Products</title>
        <meta name="description" content="Servsy provides trusted third-party after-sales service for home appliance brands, electronics, gadgets, and IT product manufacturers across 19,000+ PIN codes in India with 500+ service centers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Home Appliances After-Sales Service Provider, Electronics Service Provider in India, IT Products Service Provider, Gadget Repair Service, Third-Party After-Sales Service for Brands, OEM Service Partner in India, Pan India Service Network, Brand Service Partner, After-Sales Service Outsourcing, Service Network for Electronics Brands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-background to-background overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
                  <span className="gradient-text">India's #1</span> After-Sales Service Provider
                </h1>
                <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                  At <span className="font-semibold text-primary">Servsy</span>, we provide <span className="font-semibold">trusted after-sales service</span> for <span className="font-semibold">home appliance brands</span> across <span className="font-semibold text-primary">19,000+ PIN codes</span> in India. With a <span className="font-semibold">network of 500+ service centers</span>, we ensure <span className="font-semibold">fast, reliable, and hassle-free</span> service experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-black text-white hover:bg-black/90"
                    onClick={() => {
                      const element = document.querySelector(".quick-service-form");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full hover:bg-black/10 transition-all duration-300 border-black text-black hover:text-black"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Partner with Us
                  </Button>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Trusted by 100+ brands</p>
                    <p className="text-muted-foreground">across India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 animate-slide-up">
                <div className="rounded-xl overflow-hidden shadow-2xl hover-lift relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-70 z-10"></div>
                  <img 
                    src="/images/hero-image-hd.svg" 
                    alt="Servsy After-Sales Service" 
                    className="w-full h-auto relative z-0"
                  />
                </div>
                <div className="bg-card rounded-xl shadow-lg border p-1">
                  <ServiceRequestForm className="quick-service-form" />
                </div>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="bg-card rounded-lg p-4 border flex items-center justify-center">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/heuser-logi--ff1b0c3.png" 
                    alt="Heuser" 
                    className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-card rounded-lg p-4 border flex items-center justify-center">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/candes-logo-1ba105c.jpeg" 
                    alt="Candes" 
                    className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-card rounded-lg p-4 border flex items-center justify-center">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/obage-logo-b820709.png" 
                    alt="Obage" 
                    className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-card rounded-lg p-4 border flex items-center justify-center">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/supercool-logo-48b2cff.png" 
                    alt="Supercool" 
                    className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Key Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl font-bold mb-4">Why Choose <span className="gradient-text">Servsy</span></h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We deliver exceptional after-sales service with nationwide coverage and expert technicians
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group hover-lift">
                  <div className="bg-card rounded-xl overflow-hidden border shadow-md h-full transition-all duration-300 group-hover:border-primary/50">
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">500+ Service Centers</h3>
                      <p className="text-muted-foreground">Strategically located across India to provide quick and efficient service</p>
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group hover-lift">
                  <div className="bg-card rounded-xl overflow-hidden border shadow-md h-full transition-all duration-300 group-hover:border-primary/50">
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">19,000+ PIN Codes</h3>
                      <p className="text-muted-foreground">Comprehensive nationwide coverage ensuring no customer is left behind</p>
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group hover-lift">
                  <div className="bg-card rounded-xl overflow-hidden border shadow-md h-full transition-all duration-300 group-hover:border-primary/50">
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">In-House Technicians</h3>
                      <p className="text-muted-foreground">Professionally trained experts with specialized knowledge in appliance repair</p>
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="group hover-lift">
                  <div className="bg-card rounded-xl overflow-hidden border shadow-md h-full transition-all duration-300 group-hover:border-primary/50">
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Fastest TAT</h3>
                      <p className="text-muted-foreground">Industry-leading turnaround time for all service requests and repairs</p>
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </section>

          {/* Who We Serve Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="font-medium">OEMs</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-medium">Home Appliance Brands</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="font-medium">Dealers</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="font-medium">Retailers</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="font-medium">Customers</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Services - Hassle-Free After-Sales Support for Home Appliance Brands</h2>
              
              <div className="mb-12">
                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle>Home Appliances Repair & After-Sales Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We provide <span className="font-semibold">end-to-end repair, installation, and warranty services</span> for all major home appliances:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                      <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                        <img 
                          src="/images/service-icons/air-cooler.svg" 
                          alt="Air Cooler Service" 
                          className="w-16 h-16 mb-2"
                        />
                        <span className="font-medium">Air Coolers</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                        <img 
                          src="/images/service-icons/led-tv.svg" 
                          alt="LED TV Service" 
                          className="w-16 h-16 mb-2"
                        />
                        <span className="font-medium">LED TVs</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                        <img 
                          src="/images/service-icons/washing-machine.svg" 
                          alt="Washing Machine Service" 
                          className="w-16 h-16 mb-2"
                        />
                        <span className="font-medium">Washing Machines</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                        <img 
                          src="/images/service-icons/refrigerator.svg" 
                          alt="Refrigerator Service" 
                          className="w-16 h-16 mb-2"
                        />
                        <span className="font-medium">Refrigerators</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Microwave Ovens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Geysers & Water Heaters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Gas Stoves & Chimneys</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Request a Callback
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card id="air-cooler">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src="/images/service-icons/air-cooler.svg" 
                        alt="Air Cooler Service" 
                        className="w-full h-full"
                      />
                    </div>
                    <CardTitle>Air Cooler Service & Installation Across India</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Are you a <span className="font-semibold">manufacturer or distributor of air coolers</span>? We offer <span className="font-semibold">pan-India installation and service support</span> to help you manage your after-sales operations seamlessly.
                    </p>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>New Air Cooler Installation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Air Cooler Repair & Maintenance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Spare Parts Support for Brands & OEMs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Doorstep Cooler Servicing & AMC Plans</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Join Us Today
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card id="led-tv">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src="/images/service-icons/led-tv.svg" 
                        alt="LED TV Service" 
                        className="w-full h-full"
                      />
                    </div>
                    <CardTitle>LED TV Installation & Service - Hassle-Free Setup & Repairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We offer <span className="font-semibold">LED TV installation, wall mounting, and repair services</span> for leading home appliance brands, dealers, and customers.
                    </p>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Wall Mounting & Bracket Installation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Smart TV Setup & Configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Screen Repairs & Component Replacement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Out-of-Warranty Service Support</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const element = document.querySelector(".quick-service-form");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Book LED TV Installation Today
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Spare Parts & Logistics Management for Brands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We provide <span className="font-semibold">district-wise spare part distribution and logistics support</span> to ensure brands <span className="font-semibold">never face stock shortages</span>.
                    </p>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Fast Delivery of Spare Parts to Service Centers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Reverse Logistics for Defective Parts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Inventory Management & Stock Maintenance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>OEM & Brand Tie-Ups for Warranty Support</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Get in Touch
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Partner With Servsy - OEMs & Brands Trusted Service Partner</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <span className="font-semibold">Are you a home appliance brand looking for a reliable service partner?</span> Servsy offers a <span className="font-semibold">one-stop solution for after-sales services</span>.
                    </p>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Scalable Service Network - 500+ service centers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Brand-Focused Approach - Customizable packages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>In-House Trained Technicians</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✔️</span>
                        <span>Service Level Agreement (SLA) Management</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Contact Us Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* Coverage Section */}
          <section id="coverage" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Coverage & Network</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">19,000+ PIN Codes Coverage</h3>
                  <p className="text-muted-foreground mb-6">
                    With our extensive network of service centers and technicians, we cover most of India's geography, ensuring prompt service delivery wherever you are.
                  </p>
                  <CoverageMap />
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <img 
                        src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/dalle-2025-03-06-22.54.02---a-modern-and-clean-illustration-of-a-city-map-with-location-pins-representing-service-availability-in-different-areas.-the-design-is-sleek-and-profes-29cb886.webp" 
                        alt="Service Network Coverage Map" 
                        className="w-full h-full object-cover rounded-md"
                      />
                      <p className="text-xs text-muted-foreground mt-2">19,000+ PIN codes across India</p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-green-100 p-2 rounded">
                          <p className="text-sm font-medium">North India</p>
                          <p className="text-xs text-muted-foreground">150+ Centers</p>
                        </div>
                        <div className="bg-blue-100 p-2 rounded">
                          <p className="text-sm font-medium">South India</p>
                          <p className="text-xs text-muted-foreground">120+ Centers</p>
                        </div>
                        <div className="bg-amber-100 p-2 rounded">
                          <p className="text-sm font-medium">East India</p>
                          <p className="text-xs text-muted-foreground">100+ Centers</p>
                        </div>
                        <div className="bg-purple-100 p-2 rounded">
                          <p className="text-sm font-medium">West India</p>
                          <p className="text-xs text-muted-foreground">130+ Centers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us & Why Choose Servsy */}
          <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About Us - Transforming After-Sales Service in India</h2>
              
              <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/about-image-hd.svg" 
                    alt="About Servsy" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-left">
                  <p className="text-lg mb-6">
                    <span className="font-semibold">Servsy</span> is India's leading <span className="font-semibold">after-sales service provider for home appliances, air coolers, and LED TVs</span>. We work with <span className="font-semibold">OEMs, brands, and retailers</span> to deliver top-quality <span className="font-semibold">installation, repair, and maintenance services</span> across <span className="font-semibold">19,000+ PIN codes</span>.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
                  <Card className="bg-primary/5">
                    <CardHeader>
                      <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To provide <span className="font-semibold">seamless, fast, and cost-effective after-sales service solutions</span> for home appliance brands and manufacturers.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/5">
                    <CardHeader>
                      <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To become India's <span className="font-semibold">most trusted service network for home appliances</span>, empowering brands with world-class after-sales support.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Servsy?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Pan India Service Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      19,000+ PIN codes covered with 500+ service centers across India.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>In-House Technicians & Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Professionally trained technicians ensuring quality service delivery.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Service Turnaround</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      24 to 48 Hours TAT, minimizing downtime for your appliances.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Genuine Spare Parts & Warranty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Original parts with warranty support for all major brands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* For Brands - Third-Party After-Sales Service */}
          <section id="for-brands" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">For Brands Looking for <span className="gradient-text">Third-Party After-Sales Service</span></h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Servsy offers comprehensive after-sales service solutions for brands and OEMs across India
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <CardTitle>Warranty Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We handle all aspects of warranty service for your products, from claim processing to service delivery.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Warranty claim validation & processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Warranty service fulfillment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Extended warranty program management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Warranty analytics & reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <CardTitle>Service Network Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Expand your service reach without investing in infrastructure or hiring technicians.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Instant access to 500+ service centers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Coverage in 19,000+ PIN codes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Tier 2 & 3 city penetration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Rural market service coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                      </svg>
                    </div>
                    <CardTitle>Cost Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Reduce your after-sales service costs while improving customer satisfaction.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Pay-per-service model</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>No fixed infrastructure costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Reduced logistics expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Optimized spare parts management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Why Brands Choose Servsy as Their After-Sales Partner</h3>
                    <p className="text-muted-foreground mb-6">
                      We understand the challenges brands face in providing quality after-sales service across India. Our comprehensive solution helps you focus on your core business while we handle customer service excellence.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Reduced Operational Complexity</p>
                          <p className="text-sm text-muted-foreground">Single point of contact for all service needs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Enhanced Customer Experience</p>
                          <p className="text-sm text-muted-foreground">Faster resolution times and professional service</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Scalable Service Infrastructure</p>
                          <p className="text-sm text-muted-foreground">Easily scale up during product launches or peak seasons</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Transparent Reporting & Analytics</p>
                          <p className="text-sm text-muted-foreground">Real-time insights into service performance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-6 border shadow-md">
                    <h4 className="text-xl font-bold mb-4">Our Brand Partnership Process</h4>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Initial Consultation</p>
                          <p className="text-sm text-muted-foreground">We understand your service requirements and challenges</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Customized Service Plan</p>
                          <p className="text-sm text-muted-foreground">We design a tailored service solution for your brand</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Technician Training</p>
                          <p className="text-sm text-muted-foreground">Our technicians are trained on your specific products</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Service Integration</p>
                          <p className="text-sm text-muted-foreground">Seamless integration with your existing systems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          5
                        </div>
                        <div>
                          <p className="font-medium">Launch & Continuous Improvement</p>
                          <p className="text-sm text-muted-foreground">Ongoing optimization of service delivery</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button 
                        className="w-full"
                        onClick={() => {
                          const element = document.getElementById("contact");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        Schedule a Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Products We Service</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                  Our technicians are trained to service a wide range of home appliances, electronics, gadgets, and IT products
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-card p-4 rounded-lg border text-center">
                  <h4 className="font-medium mb-2">Home Appliances</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Air Coolers</li>
                    <li>LED TVs</li>
                    <li>Washing Machines</li>
                    <li>Refrigerators</li>
                    <li>Microwave Ovens</li>
                    <li>Air Conditioners</li>
                    <li>Water Purifiers</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg border text-center">
                  <h4 className="font-medium mb-2">Electronics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Home Theater Systems</li>
                    <li>Sound Bars</li>
                    <li>Bluetooth Speakers</li>
                    <li>DVD/Blu-ray Players</li>
                    <li>Gaming Consoles</li>
                    <li>Digital Cameras</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg border text-center">
                  <h4 className="font-medium mb-2">Gadgets</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Smartphones</li>
                    <li>Tablets</li>
                    <li>Smartwatches</li>
                    <li>Fitness Trackers</li>
                    <li>E-readers</li>
                    <li>Wireless Earbuds</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg border text-center">
                  <h4 className="font-medium mb-2">IT Products</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Laptops</li>
                    <li>Desktop PCs</li>
                    <li>Printers</li>
                    <li>Routers & Networking</li>
                    <li>UPS & Inverters</li>
                    <li>CCTV & Security Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Brands We Serve */}
          <section id="brands" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Brands We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/heuser-logi--ff1b0c3.png" 
                    alt="Heuser Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/candes-logo-1ba105c.jpeg" 
                    alt="Candes Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/obage-logo-b820709.png" 
                    alt="Obage Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/one-assist-8d4889d.png" 
                    alt="One Assist Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/supercool-logo-48b2cff.png" 
                    alt="Supercool Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-card p-4 rounded-lg border flex items-center justify-center h-24">
                  <img 
                    src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/tata-green-logo-5bf97ce.png" 
                    alt="Tata Green Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Trusted by leading appliance brands across India for reliable after-sales service.
                </p>
                <Button variant="outline">View All Partners</Button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <Testimonials />

          {/* FAQ Section */}
          <FAQ />

          {/* Blog Preview Section */}
          <BlogPreview />

          {/* Contact Section */}
          <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <ContactForm />
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span>📞</span>
                      </div>
                      <div>
                        <p className="font-medium">Customer Support</p>
                        <p className="text-muted-foreground">
                          <Link href="tel:+919266985775" className="hover:text-primary transition-colors">
                            +91 9266985775
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span>💬</span>
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp Support</p>
                        <p className="text-muted-foreground">
                          <Link href="https://wa.me/919266985775" target="_blank" className="hover:text-primary transition-colors">
                            +91 9266985775
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span>✉️</span>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          <Link href="mailto:hello@servsy.in" className="hover:text-primary transition-colors">
                            hello@servsy.in
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span>🏢</span>
                      </div>
                      <div>
                        <p className="font-medium">Head Office</p>
                        <p className="text-muted-foreground">9th Floor, Tower C, Cyber Logix Park, C-28, Sector 62 Noida, 201301, UP, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-muted-foreground">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p className="text-muted-foreground">Servsy Headquarters</p>
                        <p className="text-xs text-muted-foreground mt-1">9th Floor, Tower C, Cyber Logix Park, C-28, Sector 62 Noida, 201301</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}

