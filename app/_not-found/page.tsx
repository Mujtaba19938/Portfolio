import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-[#c9a86a] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#c9a86a] hover:bg-[#b89559] text-[#1a1a1a] font-semibold py-3 px-6 rounded-md transition-all duration-300"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
