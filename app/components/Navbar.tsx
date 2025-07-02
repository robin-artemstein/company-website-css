import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-lime-100 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Company Logo
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-lime-600 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-lime-600 transition">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-lime-600 transition">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-lime-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-lime-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}