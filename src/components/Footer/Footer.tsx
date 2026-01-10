import Link from 'next/link'

const Footer = () => {

  return (
    <div className="flex flex-col items-center w-full justify-center gap-4 p-6 border border-b-0 border-x-0">
      <Link
        href="/contact#schedule-call"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        📅 Book a Free Call
      </Link>
      <p className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} <span className="font-semibold">Codenexo</span>. All Rights Reserved.
      </p>
    </div>

  )
}

export default Footer