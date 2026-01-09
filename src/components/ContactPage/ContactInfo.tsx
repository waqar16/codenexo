import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#041025] to-[#0b1020] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Direct Contact */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Prefer Email? Reach Out Directly</h3>
            <p className="text-gray-300 mb-8">
              We're here to answer any questions you have. Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                  <FaEnvelope className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email us at</p>
                  <a 
                    href="mailto:muhammadmubashirbabar@gmail.com" 
                    className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors"
                  >
                    muhammadmubashirbabar@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Based in</p>
                  <p className="text-lg font-semibold text-white">
                    Pakistan
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Working with clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Social Links & Additional Info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            
            <div className="space-y-4 mb-8">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/codenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
              >
                <FaLinkedin className="text-2xl text-blue-400" />
                <div>
                  <p className="font-semibold group-hover:text-yellow-400 transition-colors">LinkedIn</p>
                  <p className="text-xs text-gray-400">Follow our company updates</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/codenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
              >
                <FaGithub className="text-2xl text-gray-300" />
                <div>
                  <p className="font-semibold group-hover:text-yellow-400 transition-colors">GitHub</p>
                  <p className="text-xs text-gray-400">Check out our open-source work</p>
                </div>
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <p className="text-sm text-gray-300">
                Monday – Friday: 9:00 AM – 6:00 PM (PKT)
              </p>
              <p className="text-sm text-gray-300 mt-2">
                We respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
