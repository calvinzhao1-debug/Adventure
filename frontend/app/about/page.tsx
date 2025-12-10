// frontend/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          About <span className="text-blue-500">ADSOC</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We are the University of New South Wales Adventure Society. 
          Exploration, camaraderie, and the great outdoors.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-l-4 border-blue-500 pl-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            ADSOC is dedicated to bringing students together through shared experiences in nature. 
            From hiking and bouldering to camping and kayaking, we aim to make outdoor adventures 
            accessible to everyone, regardless of experience level. We believe that the best 
            stories are written off the beaten path.
          </p>
        </div>
        <div className="relative h-64 md:h-80 w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
           {/* Replace with a real image from your public folder later */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-600">
             [Mission Image Placeholder]
           </div>
        </div>
      </div>

      {/* Stats / Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 border-y border-gray-800 mb-24">
        {[
          { label: "Members", value: "500+" },
          { label: "Events per Year", value: "40+" },
          { label: "Mountains Climbed", value: "12" },
          { label: "Years Active", value: "15" },
        ].map((stat, index) => (
          <div key={index} className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}