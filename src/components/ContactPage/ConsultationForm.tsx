'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface ConsultationFormData {
  fullName: string
  email: string
  companyName: string
  contactNo: string
  whatsApp: string
  location: string
  budget: number
  message: string
  file: File | null
}

interface FormErrors {
  fullName?: string
  email?: string
  contactNo?: string
  message?: string
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    companyName: '',
    contactNo: '',
    whatsApp: '',
    location: '',
    budget: 5000,
    message: '',
    file: null
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState('No File Chosen')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Contact No validation
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)'
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
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append('fullName', formData.fullName)
      submitData.append('email', formData.email)
      submitData.append('companyName', formData.companyName)
      submitData.append('contactNo', formData.contactNo)
      submitData.append('whatsApp', formData.whatsApp)
      submitData.append('location', formData.location)
      submitData.append('budget', formData.budget.toString())
      submitData.append('message', formData.message)
      submitData.append('leadSource', 'Consultation form /contact')

      if (formData.file) {
        submitData.append('file', formData.file)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      })

      if (response.ok) {
        if (typeof window !== "undefined") {
          const w = window as any
          w.dataLayer = w.dataLayer || []
          w.dataLayer.push({
            event: 'lead_submitted',
            form_name: 'real_estate_leads'
          })
        }

        setSubmitStatus('success')
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          contactNo: '',
          whatsApp: '',
          location: '',
          budget: 5000,
          message: '',
          file: null
        })
        setFileName('No File Chosen')
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

  const handleChange = (field: keyof ConsultationFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
    setFileName(file ? file.name : 'No File Chosen')
  }

  const formatBudget = (value: number): string => {
    return `$ ${value.toLocaleString()}`
  }

  return (
    <section id="contact-form" className="relative w-full bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">Book a Free Consultation Call</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Fill out the form below with your project details. We'll review your requirements and get back to you within 24 hours.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold">✓ Thank you for your submission!</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Thanks! We've received your details and will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                  <p className="text-red-400 font-semibold">✗ Something went wrong</p>
                  <p className="text-sm text-gray-300 mt-1">Please try again or email us directly at contact@codenexo.tech</p>
                </div>
              )}

              {/* Two Column Grid for Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.fullName}
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {errors.fullName && (
                    <span className="text-red-400 text-xs">{errors.fullName}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder=""
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.email}
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {errors.email && (
                    <span className="text-red-400 text-xs">{errors.email}</span>
                  )}
                </div>

                {/* Company Name */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    Company Name
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder=""
                      value={formData.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      className="pl-10"
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                {/* Contact No */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    Contact No <span className="text-red-400">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder=""
                      value={formData.contactNo}
                      onChange={(e) => handleChange('contactNo', e.target.value)}
                      className={`pl-10 ${errors.contactNo ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.contactNo}
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {errors.contactNo && (
                    <span className="text-red-400 text-xs">{errors.contactNo}</span>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    WhatsApp
                  </Label>
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder=""
                      value={formData.whatsApp}
                      onChange={(e) => handleChange('whatsApp', e.target.value)}
                      className="pl-10"
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-sm font-medium text-gray-200">
                    Location
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder=""
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="pl-10"
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Budget Slider - Full Width */}
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                  <Label className="text-sm font-medium text-gray-200">
                    Project Budget
                  </Label>
                  <span className="text-lg font-bold text-[#f39c12]">
                    {formatBudget(formData.budget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#f39c12] hover:accent-[#e67e22] transition-colors"
                  style={{
                    background: `linear-gradient(to right, #f39c12 0%, #f39c12 ${((formData.budget - 1000) / 49000) * 100}%, #374151 ${((formData.budget - 1000) / 49000) * 100}%, #374151 100%)`
                  }}
                />
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-gray-400">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Message - Full Width */}
              <div className="flex flex-col space-y-2">
                <Label className="text-sm font-medium text-gray-200">
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  placeholder=""
                  className={`resize-none min-h-[140px] ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs">{errors.message}</span>
                )}
              </div>

              {/* Doc File Upload - Full Width */}
              <div className="flex flex-col space-y-2">
                <Label className="text-sm font-medium text-gray-200">
                  Doc File
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-between w-full h-9 px-3 py-1 text-sm border border-input bg-transparent rounded-md cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-gray-400">{fileName}</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX, TXT (max 10MB)
                  </p>
                </div>
              </div>

              {/* Submit Button - Full Width */}
              <Button
                type="submit"
                variant="custom1"
                size="lg"
                className="w-full text-base font-semibold mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
