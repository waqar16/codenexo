import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse FormData for file uploads & fields
    const formData = await request.formData()

    // Extract all form fields (ensure empty string fallback)
    const fullName = formData.get('fullName')?.toString() || 'Website Visitor'
    const email = formData.get('email')?.toString() ?? ''
    const companyName = formData.get('companyName')?.toString() ?? ''
    const contactNo = formData.get('contactNo')?.toString() ?? ''
    const whatsApp = formData.get('whatsApp')?.toString() ?? ''
    const location = formData.get('location')?.toString() ?? ''
    const budget = formData.get('budget')?.toString() ?? ''
    const message = formData.get('message')?.toString() ?? ''
    const file = formData.get('file') as File | null
    const leadSource = formData.get('leadSource')?.toString() ?? 'Website form'

    // Basic validation (minimal, keep existing UI expectations)
    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are required.'
        },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()

    // Log submission details (retain existing logging style)
    console.log('=== Contact/Consultation Form Submission ===')
    console.log('Timestamp:', timestamp)
    console.log('Lead Source:', leadSource)
    console.log('Full Name:', fullName)
    console.log('Email:', email)
    console.log('Company Name:', companyName || 'N/A')
    console.log('Contact No:', contactNo || 'N/A')
    console.log('WhatsApp:', whatsApp || 'N/A')
    console.log('Location:', location || 'N/A')
    console.log('Budget:', budget || 'N/A')
    console.log('Message:', message || 'N/A')
    console.log('File:', file ? `${file.name} (${file.size} bytes)` : 'No file uploaded')
    console.log('================================')

    // HubSpot integration (non-blocking)
    const token = process.env.HUBSPOT_ACCESS_TOKEN
    if (!token) {
      console.error('Missing HUBSPOT_ACCESS_TOKEN')
    } else {
      // Split name
      const [firstname, ...rest] = fullName.trim().split(' ')
      const lastname = rest.join(' ') || ''

      // Build enhanced message with custom fields appended
      const enhancedMessage = `${message}

--- Additional Details ---
Budget: ${budget || 'N/A'}
Location: ${location || 'N/A'}
WhatsApp: ${whatsApp || 'N/A'}
Lead Source: ${leadSource}
Submitted: ${timestamp}`

      // Use only standard HubSpot properties to avoid errors
      const hubspotBody = {
        properties: {
          email,
          firstname,
          lastname,
          company: companyName || 'N/A',
          phone: contactNo || whatsApp || '',
          message: enhancedMessage,
        },
      }

      // Only attempt if we have an email
      if (email) {
        try {
          const hsRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(hubspotBody),
          })
          if (!hsRes.ok) {
            const text = await hsRes.text()
            console.error('HubSpot error:', text)
          } else {
            console.log('✓ HubSpot contact created/updated successfully')
          }
        } catch (err) {
          console.error('HubSpot request failed:', err)
        }
      }
    }

    // Send email notification via Brevo
    const brevoApiKey = process.env.BREVO_API_KEY
    const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL
    const brevoSenderName = process.env.BREVO_SENDER_NAME || 'CodeNexo'
    const brevoNotificationTo = process.env.BREVO_NOTIFICATION_TO

    if (!brevoApiKey) {
      console.error('Missing BREVO_API_KEY - skipping email notification')
    } else if (!brevoSenderEmail || !brevoNotificationTo) {
      console.error('Missing BREVO_SENDER_EMAIL or BREVO_NOTIFICATION_TO - skipping email notification')
    } else {
      try {
        const subject = `New website lead - ${leadSource}`

        const textContent = `
New website lead from ${leadSource}:

Full Name: ${fullName}
Email: ${email}
Company Name: ${companyName || 'N/A'}
Contact No: ${contactNo || 'N/A'}
WhatsApp: ${whatsApp || 'N/A'}
Location: ${location || 'N/A'}
Budget: ${budget || 'N/A'}
Message:
${message || 'N/A'}

File: ${file ? `${file.name} (${file.size} bytes)` : 'No file uploaded'}
Timestamp: ${timestamp}
        `.trim()

        const htmlContent = `
          <h2>New website lead - ${leadSource}</h2>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Company Name:</strong> ${companyName || 'N/A'}</li>
            <li><strong>Contact No:</strong> ${contactNo || 'N/A'}</li>
            <li><strong>WhatsApp:</strong> ${whatsApp || 'N/A'}</li>
            <li><strong>Location:</strong> ${location || 'N/A'}</li>
            <li><strong>Budget:</strong> ${budget || 'N/A'}</li>
          </ul>
          <p><strong>Message:</strong></p>
          <p>${(message || 'N/A').replace(/\n/g, '<br />')}</p>
          <p><strong>File:</strong> ${file ? `${file.name} (${file.size} bytes)` : 'No file uploaded'}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        `

        const brevoBody = {
          sender: { email: brevoSenderEmail, name: brevoSenderName },
          to: [{ email: brevoNotificationTo, name: 'CodeNexo Sales' }],
          subject,
          textContent,
          htmlContent,
        }

        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify(brevoBody),
        })

        if (!brevoRes.ok) {
          const errText = await brevoRes.text()
          console.error('Brevo email error:', errText)
          console.error('Brevo API Key (first 10 chars):', brevoApiKey.substring(0, 10))
        } else {
          const result = await brevoRes.json()
          console.log('✓ Brevo notification email sent:', result)
        }
      } catch (err) {
        console.error('Brevo email request failed:', err)
      }
    }

    // Keep existing success response shape
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again.'
      },
      { status: 500 }
    )
  }
}
