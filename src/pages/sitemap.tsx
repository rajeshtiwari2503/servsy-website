import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Sitemap() {
  return (
    <>
      <Head>
        <title>Sitemap - Servsy</title>
        <meta name="description" content="Sitemap for Servsy - India's #1 After-Sales Service Provider for Home Appliances" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
            <p className="text-muted-foreground mb-6">
              Find all pages and sections of our website organized in one place.
            </p>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-primary hover:underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/sitemap" className="text-primary hover:underline">
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Home Page Sections</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/#services" className="text-primary hover:underline">
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/#air-cooler" className="text-primary hover:underline">
                        Air Cooler Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/#led-tv" className="text-primary hover:underline">
                        LED TV Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/#coverage" className="text-primary hover:underline">
                        Coverage & Network
                      </Link>
                    </li>
                    <li>
                      <Link href="/#about" className="text-primary hover:underline">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/#brands" className="text-primary hover:underline">
                        Brands We Serve
                      </Link>
                    </li>
                    <li>
                      <Link href="/#contact" className="text-primary hover:underline">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Service Categories</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/#services" className="text-primary hover:underline">
                        Home Appliances Repair & After-Sales Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/#air-cooler" className="text-primary hover:underline">
                        Air Cooler Service & Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/#led-tv" className="text-primary hover:underline">
                        LED TV Installation & Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="text-primary hover:underline">
                        Spare Parts & Logistics Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="text-primary hover:underline">
                        Partner With Servsy - OEMs & Brands
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Separator className="mb-8" />
              <p className="text-muted-foreground">
                Can't find what you're looking for? <Link href="/#contact" className="text-primary hover:underline">Contact us</Link> for assistance.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}