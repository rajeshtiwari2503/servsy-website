import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Servsy</title>
        <meta name="description" content="Terms of Service for Servsy - India's #1 After-Sales Service Provider for Home Appliances" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last Updated: March 5, 2025</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Servsy. These terms and conditions outline the rules and regulations for the use of Servsy's website and services.
                </p>
                <p>
                  By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Servsy's website if you do not accept all of the terms and conditions stated on this page.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
                <p className="mb-4">
                  Servsy provides after-sales service for home appliances, air coolers, LED TVs, and other electronic devices. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Repair and maintenance of home appliances</li>
                  <li>Installation services</li>
                  <li>Spare parts supply and logistics</li>
                  <li>Annual maintenance contracts</li>
                  <li>OEM and brand partnership services</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">3. Service Booking and Appointments</h2>
                <p className="mb-4">
                  When booking a service through our website or customer support channels:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You agree to provide accurate and complete information about your service requirements.</li>
                  <li>Service appointments are subject to technician availability in your area.</li>
                  <li>We will make reasonable efforts to meet scheduled appointment times, but exact timing cannot be guaranteed due to various factors including traffic and previous service call durations.</li>
                  <li>Cancellations should be made at least 4 hours before the scheduled appointment time.</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">4. Warranty and Service Guarantees</h2>
                <p className="mb-4">
                  Our service warranties and guarantees:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All repair services come with a 30-day service warranty unless otherwise specified.</li>
                  <li>Spare parts replaced during service are covered by manufacturer warranty or our service warranty, whichever is longer.</li>
                  <li>Installation services are guaranteed for 15 days for any installation-related issues.</li>
                  <li>Warranty does not cover damages due to misuse, accidents, or unauthorized modifications.</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="mb-4">
                  Our payment policies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service charges are based on the type of appliance, service required, and parts needed.</li>
                  <li>A diagnosis fee may be applicable, which will be adjusted against the total service cost if you proceed with the repair.</li>
                  <li>Payment is due upon completion of service unless prior arrangements have been made.</li>
                  <li>We accept various payment methods including cash, credit/debit cards, and digital payment options.</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p>
                  Servsy shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> legal@servsy.in</p>
                  <p><strong>Address:</strong> A-9, Sector 59, Noida, 201301</p>
                  <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}