"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Need Help? We're Here for You!</h1>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <form className="grid gap-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="How can we help you?" rows={5} required />
          <Button type="submit" className="w-fit">Submit</Button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>How do I cancel a booking?</AccordionTrigger>
            <AccordionContent>You can cancel a booking from the "My Bookings" page before the scheduled time.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What if the service provider doesn't show up?</AccordionTrigger>
            <AccordionContent>Contact support immediately and we'll reassign or refund based on the situation.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Can I reschedule a service?</AccordionTrigger>
            <AccordionContent>Yes, rescheduling is allowed up to 2 hours before the booking time. Reach out to support</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
