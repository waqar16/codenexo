'use client'

import React, { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface FormData {
  fullName: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  heardFrom: string
  consent: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
  consent?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Web & App Development',
    budget: '$5,000–$10,000',
    timeline: 'Flexible',
    message: '',
    heardFrom: '',
    consent: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Map to unified FormData expected by /api/contact
      const fd = new FormData()
      fd.append('fullName', formData.fullName)
      fd.append('email', formData.email)
      fd.append('companyName', formData.company)
      fd.append('contactNo', '') // no phone field in this form
      fd.append('whatsApp', '')
      fd.append('location', '')
      fd.append('budget', '')
      // Merge project meta into message for CRM context
      const combinedMessage = `${formData.message}\n---\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\nTimeline: ${formData.timeline}\nHeard From: ${formData.heardFrom || 'N/A'}`
      fd.append('message', combinedMessage)
      fd.append('leadSource', 'Project inquiry form /contact')

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          company: '',
          projectType: 'Web & App Development',
          budget: '$5,000–$10,000',
          timeline: 'Flexible',
          message: '',
          heardFrom: '',
          consent: false
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact-form" className="relative w-full bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">Start Your Project</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a detailed proposal tailored to your needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <p className="text-green-400 font-semibold">✓ Message sent successfully!</p>
              <p className="text-sm text-gray-300 mt-1">We'll get back to you within 24 hours.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
              <p className="text-red-400 font-semibold">✗ Something went wrong</p>
              <p className="text-sm text-gray-300 mt-1">Please try again or email us directly.</p>
            </div>
          )}

          {/* Full Name */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">
              Full Name <span className="text-red-400">*</span>
            </Label>
            <Input
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={errors.fullName ? 'border-red-500' : ''}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <span className="text-red-400 text-xs">{errors.fullName}</span>
            )}
          </div>

          {/* Work Email */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">
              Work Email <span className="text-red-400">*</span>
            </Label>
            <Input
              type="email"
              placeholder=""
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Company / Organization */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">
              Company / Organization <span className="text-gray-500 text-xs">(optional)</span>
            </Label>
            <Input
              placeholder="Your Company Name"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>

          {/* Project Type */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">Project Type</Label>
            <select
              value={formData.projectType}
              onChange={(e) => handleChange('projectType', e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              <option value="AI & Automation" className="bg-[#0b1020] text-white">AI & Automation</option>
              <option value="Web & App Development" className="bg-[#0b1020] text-white">Web & App Development</option>
              <option value="Custom Software" className="bg-[#0b1020] text-white">Custom Software</option>
              <option value="Embedded / IoT" className="bg-[#0b1020] text-white">Embedded / IoT</option>
              <option value="Data & Analytics" className="bg-[#0b1020] text-white">Data & Analytics</option>
              <option value="Other" className="bg-[#0b1020] text-white">Other</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">Budget Range</Label>
            <select
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              <option value="< $2,000" className="bg-[#0b1020] text-white">{'< $2,000'}</option>
              <option value="$2,000–$5,000" className="bg-[#0b1020] text-white">$2,000–$5,000</option>
              <option value="$5,000–$10,000" className="bg-[#0b1020] text-white">$5,000–$10,000</option>
              <option value="$10,000+" className="bg-[#0b1020] text-white">$10,000+</option>
            </select>
          </div>

          {/* Project Timeline */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">Project Timeline</Label>
            <select
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              <option value="ASAP" className="bg-[#0b1020] text-white">ASAP</option>
              <option value="1–3 months" className="bg-[#0b1020] text-white">1–3 months</option>
              <option value="3–6 months" className="bg-[#0b1020] text-white">3–6 months</option>
              <option value="Flexible" className="bg-[#0b1020] text-white">Flexible</option>
            </select>
          </div>

          {/* Message / Project Details */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">
              Message / Project Details <span className="text-red-400">*</span>
            </Label>
            <Textarea
              placeholder="Tell us about your project, goals, and any specific requirements..."
              className={`resize-none ${errors.message ? 'border-red-500' : ''}`}
              rows={6}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="text-red-400 text-xs">{errors.message}</span>
            )}
          </div>

          {/* How did you hear about us */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm font-medium text-gray-200">
              How did you hear about CodeNexo? <span className="text-gray-500 text-xs">(optional)</span>
            </Label>
            <Input
              placeholder=""
              value={formData.heardFrom}
              onChange={(e) => handleChange('heardFrom', e.target.value)}
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => handleChange('consent', e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
            />
            <div>
              <label htmlFor="consent" className="text-sm text-gray-200 cursor-pointer">
                I agree to be contacted by CodeNexo regarding this inquiry. <span className="text-red-400">*</span>
              </label>
              {errors.consent && (
                <p className="text-red-400 text-xs mt-1">{errors.consent}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="custom1"
            size="lg"
            className="w-full text-base font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
