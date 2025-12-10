import EventCard from "@/components/ui/EventCard";
import Hero from "@/components/Hero";

// Mock data (replace with real API data later)
const events = [
  {
    id: 1,
    title: "Careers in Data Panel",
    date: "March 15, 2025",
    location: "UNSW Colombo LG02",
    description: "Hear from senior data scientists at Google, Atlassian, and Canva about their journey from university to industry leaders.",
    tag: "Career",
    image: "/adsoc-bouldering.jpg", // Ensure you have images in public folder
  },
  {
    id: 2,
    title: "Intro to Python Workshop",
    date: "March 22, 2025",
    location: "Online (Zoom)",
    description: "A beginner-friendly crash course in Python for Data Analysis. Perfect for first-year students.",
    tag: "Workshop",
    image: "/adsoc-bouldering.jpg",
  },
  {
    id: 3,
    title: "Annual Hackathon",
    date: "April 10, 2025",
    location: "UNSW Roundhouse",
    description: "48 hours to solve real-world problems. $2000 prize pool. Free food and swag provided!",
    tag: "Hackathon",
    image: "/adsoc-bouldering.jpg",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero 
        imageUrl="/adsoc-bouldering.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />
      {/* Page Header */}
      <div className="bg-gray-900/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Upcoming Events</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for workshops, social gatherings, and industry networking nights.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              tag={event.tag}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}