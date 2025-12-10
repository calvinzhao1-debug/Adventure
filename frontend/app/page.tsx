import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero 
        imageUrl="/Ski_trip_banner.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />
      
      {/* Rest of your page content */}
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-black">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-400 mb-4 border border-blue-800">
            Welcome to Term 1, 2025 🚀
          </div>
          
          <p className="text-lg text-gray-400 mx-auto max-w-2xl">
            We are the UNSW Data Science Society. We run workshops, hackathons, and networking events to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/membership" className="h-12 px-8 rounded-full bg-white text-black font-bold flex items-center justify-center hover:bg-gray-200 transition">
              Become a Member
            </Link>
            <Link href="/events" className="h-12 px-8 rounded-full border border-gray-600 text-white font-medium hover:bg-gray-800 transition flex items-center justify-center">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}