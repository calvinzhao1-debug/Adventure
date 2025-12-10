// frontend/app/sponsors/page.tsx
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center min-h-[80vh]">
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
        <p className="text-lg text-gray-400">
          We are proud to be supported by these amazing organizations that help make our 
          adventures safer, cheaper, and more accessible for all students.
        </p>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl mb-20">
        {/* You can map through an array of sponsor logos here */}
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="aspect-[3/2] bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition duration-300 cursor-pointer group"
          >
            <span className="text-gray-500 font-mono group-hover:text-blue-400 transition">
              LOGO {i}
            </span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Interested in Sponsoring Us?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with hundreds of adventurous students. We offer various sponsorship tiers including branding on merchandise, social media features, and event partnerships.
        </p>
        <Link 
          href="mailto:contact@adsoc.unsw.edu.au" 
          className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}