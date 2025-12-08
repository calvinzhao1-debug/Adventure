import Link from "next/link";
import Hero from "@/components/Hero";
// import any other necessary modules here

export default function Home() {
  return (
  <div>
      <Hero imageUrl="/adsoc-bouldering.jpg" />
    <div className="flex flex-col items-center justify-center py-20 md:py-32 px-4 text-center">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400 mb-4 border border-blue-800">
          Welcome to Term 1, 2025 🚀
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Unlocking the power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Data Science
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 mx-auto max-w-2xl">
          We are the UNSW Data Science Society. We bridge the gap between academic theory and industry reality through workshops, hackathons, and networking events.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/membership" className="h-10 px-6 rounded-md bg-white text-black font-semibold flex items-center justify-center hover:bg-gray-200 transition">
            Become a Member
          </Link>
          <Link href="/events" className="h-10 px-6 rounded-md border border-gray-700 hover:bg-gray-800 transition flex items-center justify-center">
            View Upcoming Events
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}