import Link from "next/link";
import { CheckCircle2 } from "lucide-react"; // install lucide-react if you want icons
import Hero from "@/components/Hero";

const benefits = [
  "Exclusive access to industry networking nights",
  "Priority entry to technical workshops",
  "Vote in society elections",
  "Merchandise discounts",
];

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
      <Hero 
        imageUrl="/adsoc-bouldering.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold">Join the Community</h1>
        <p className="text-lg text-gray-400">
          Whether you are a Data Science major or just curious about AI, ADSOC is the place for you.
        </p>
        
        <ul className="space-y-3">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" /> {/* Simple dot if no icons */}
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Link href="/subscribe" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
            Join via SpArc
          </Link>
        </div>
      </div>
      
      {/* Decorative Box */}
      <div className="flex-1 w-full h-64 md:h-96 bg-gradient-to-br from-blue-900 to-black border border-gray-800 rounded-2xl flex items-center justify-center">
        <span className="text-gray-500 font-mono">ADSOC_MEMBERSHIP_CARD</span>
      </div>
    </div>
  );
}