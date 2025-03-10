import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Get in Touch - Servsy | India's #1 After-Sales Service Provider for Home Appliances, Electronics & IT Products</title>
        <meta name="description" content="Contact Servsy for after-sales service for home appliances, electronics, gadgets, and IT products. Brands looking for third-party after-sales service partners can reach us via phone, WhatsApp, email or visit our head office in Noida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-background to-background overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center animate-fade-in mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Get in <span className="gradient-text">Touch</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  We're here to help with all your after-sales service needs. Reach out to us through any of the channels below.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Phone */}
                <Card className="hover-lift border-primary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                    <p className="text-muted-foreground mb-4">Call us for immediate assistance</p>
                    <Link href="tel:+919266985775" className="text-primary font-medium text-lg hover:underline">
                      +91 9266985775
                    </Link>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="hover-lift border-primary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
                    <p className="text-muted-foreground mb-4">Chat with us on WhatsApp</p>
                    <Link 
                      href="https://wa.me/919266985775" 
                      target="_blank" 
                      className="text-primary font-medium text-lg hover:underline"
                    >
                      +91 9266985775
                    </Link>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover-lift border-primary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-4">Send us an email anytime</p>
                    <Link href="mailto:hello@servsy.in" className="text-primary font-medium text-lg hover:underline">
                      hello@servsy.in
                    </Link>
                  </CardContent>
                </Card>

                {/* Head Office */}
                <Card className="hover-lift border-primary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Head Office</h3>
                    <p className="text-muted-foreground mb-4">Visit our headquarters</p>
                    <address className="not-italic text-center">
                      9th Floor, Tower C, Cyber Logix Park,<br />
                      C-28, Sector 62 Noida,<br />
                      201301, UP, India
                    </address>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Map and Contact Form Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our services? Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                  <p className="text-muted-foreground mb-8">
                    Our head office is strategically located in Noida, providing easy access to our nationwide service network.
                  </p>
                  <div className="rounded-lg overflow-hidden border shadow-md h-[400px] bg-card">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0168431464513!2d77.36493307549395!3d28.627286175649513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456d0bfa47%3A0xf5c6e7b0f8a05444!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1709760000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">What are your working hours?</h3>
                    <p className="text-muted-foreground">
                      Our customer support team is available Monday to Saturday from 9:00 AM to 6:00 PM. For urgent queries, you can reach us via WhatsApp.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">How quickly can I expect a response?</h3>
                    <p className="text-muted-foreground">
                      We typically respond to all inquiries within 24 hours. For urgent matters, please call our customer support number.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Do you have service centers in my city?</h3>
                    <p className="text-muted-foreground">
                      With 500+ service centers across India covering 19,000+ PIN codes, we likely have a service center near you. Contact us with your location for confirmation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">How can brands partner with Servsy?</h3>
                    <p className="text-muted-foreground">
                      If you're a home appliance brand looking to partner with us, please contact us via email at hello@servsy.in or call our business development team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* For Brands Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">For Brands Looking for <span className="gradient-text">Third-Party After-Sales Service</span></h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Servsy offers comprehensive after-sales service solutions for brands and OEMs across India
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Partner With Servsy for Your After-Sales Needs</h3>
                  <p className="text-muted-foreground mb-6">
                    If you're a brand or manufacturer of home appliances, electronics, gadgets, or IT products looking for a reliable third-party after-sales service partner, Servsy offers end-to-end solutions tailored to your specific requirements.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Nationwide Service Network</p>
                        <p className="text-sm text-muted-foreground">500+ service centers covering 19,000+ PIN codes</p>
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
                        <p className="font-medium">Trained Technicians</p>
                        <p className="text-sm text-muted-foreground">Professionally trained experts for all product categories</p>
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
                        <p className="font-medium">Customized Service Plans</p>
                        <p className="text-sm text-muted-foreground">Tailored solutions based on your brand's specific needs</p>
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
                        <p className="font-medium">Transparent Reporting</p>
                        <p className="text-sm text-muted-foreground">Real-time analytics and performance metrics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      onClick={() => {
                        window.location.href = "mailto:partnerships@servsy.in";
                      }}
                    >
                      Partner With Us
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full hover:bg-primary/10 transition-all duration-300"
                      onClick={() => {
                        window.location.href = "tel:+919266985775";
                      }}
                    >
                      Call for Business Inquiry
                    </Button>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 border shadow-md">
                  <h4 className="text-xl font-bold mb-6">Products We Service</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Home Appliances</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Air Coolers</li>
                        <li>• LED TVs</li>
                        <li>• Washing Machines</li>
                        <li>• Refrigerators</li>
                        <li>• Microwave Ovens</li>
                        <li>• Air Conditioners</li>
                        <li>• Water Purifiers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Electronics & IT</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Laptops & Computers</li>
                        <li>• Printers & Scanners</li>
                        <li>• Smartphones & Tablets</li>
                        <li>• Audio Systems</li>
                        <li>• Gaming Consoles</li>
                        <li>• Networking Equipment</li>
                        <li>• Security Systems</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h5 className="font-medium mb-2">Services We Offer</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-primary/5 p-2 rounded">Installation</div>
                      <div className="bg-primary/5 p-2 rounded">Repair</div>
                      <div className="bg-primary/5 p-2 rounded">Maintenance</div>
                      <div className="bg-primary/5 p-2 rounded">Warranty Service</div>
                      <div className="bg-primary/5 p-2 rounded">AMC</div>
                      <div className="bg-primary/5 p-2 rounded">Parts Replacement</div>
                      <div className="bg-primary/5 p-2 rounded">Software Updates</div>
                      <div className="bg-primary/5 p-2 rounded">Diagnostics</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">For Business Development:</p>
                    <p className="text-sm">Email: <a href="mailto:partnerships@servsy.in" className="text-primary">partnerships@servsy.in</a></p>
                    <p className="text-sm">Phone: <a href="tel:+919266985775" className="text-primary">+91 9266985775</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Hassle-Free Service?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a customer needing appliance repair or a brand looking for a reliable service partner, we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    window.location.href = "tel:+919266985775";
                  }}
                >
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full hover:bg-primary/10 transition-all duration-300"
                  onClick={() => {
                    window.open("https://wa.me/919266985775", "_blank");
                  }}
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}