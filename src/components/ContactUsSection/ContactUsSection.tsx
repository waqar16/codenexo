'use client'
import React, { useState, FormEvent } from 'react'
import { FaComments, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const ContactUsSection = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [query, setQuery] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = () => {
    if (!firstName.trim() || !email.trim() || !query.trim()) return false
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setStatus('idle')
    try {
      const fd = new FormData()
      fd.append('fullName', `${firstName} ${lastName}`.trim())
      fd.append('email', email)
      fd.append('companyName', '')
      fd.append('contactNo', phone)
      fd.append('whatsApp', phone)
      fd.append('location', '')
      fd.append('budget', '')
      fd.append('message', query)
      fd.append('leadSource', 'Landing page form /home')
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      if (res.ok) {
        setStatus('success')
        setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setQuery('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Landing form error:', err)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='p-6 md:p-12 grid gap-6 md:grid-cols-2 items-start'>
      <section className="w-full text-white">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          have a<br />question?
        </h1>

        {/* Paragraphs */}
        <p className="mt-6 text-sm leading-relaxed">
          We’re here to help! Fill out the form or reach us via email or phone.
          Our Support & Development Team is available to ensure you get the best
          experience with our software solutions, whether you need project support,
          want to discuss your idea, or have any technical questions.
        </p>

        <p className="mt-4 text-sm leading-relaxed">
          Every inquiry receives a personalized response. Please allow up to 24 hours
          during business days for a reply. Our business hours are <b>M–F, 9am to 6pm</b>.
        </p>

        {/* Contact Actions */}
        <div className="mt-4 space-y-5 text-base">

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <a href="mailto:contact@codenexo.tech" className="underline">
              contact@codenexo.tech
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <a href="tel:+923226264566" className="underline">
              +92 322 626 4566
            </a>
          </div>

          {/* Whatsapp */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <a href="https://wa.me/923226264566" className="underline">
              WhatsApp us
            </a>
          </div>

          {/* Live Chat */}
          <div className="flex items-center gap-2">
            <FaComments className="text-xl" />
            <a href="/contact" className="underline">
              chat with us
            </a>
          </div>
        </div>
      </section>
      <div className='w-full'>
        <form onSubmit={handleSubmit} className="w-full mt-10 space-y-6" suppressHydrationWarning data-lpignore="true">
          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center text-sm">Thank you! We'll respond within 24 hours.</div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center text-sm">Failed to submit. Please retry.</div>
          )}

          {/* First + Last Name (Row) */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium">First Name</Label>
              <Input className="w-full" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} autoComplete="off" data-lpignore="true" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label className="text-sm font-medium">Last Name</Label>
              <Input className="w-full" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} autoComplete="off" data-lpignore="true" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium">Email</Label>
            <Input className="w-full" type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" data-lpignore="true" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Phone / WhatsApp</Label>
            <Input className="w-full" type="tel" placeholder="+92 322 626 4566" value={phone} onChange={e => setPhone(e.target.value)} autoComplete="off" data-lpignore="true" />
          </div>
          {/* Query */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium">Your Query</Label>
            <Textarea
              placeholder="Write your message here..."
              className="w-full resize-none"
              rows={6}
              value={query}
              onChange={e => setQuery(e.target.value)}
              data-lpignore="true"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" variant={"custom1"} className="w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactUsSection
