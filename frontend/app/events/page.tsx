// You would typically fetch this from a CMS like Sanity or Contentful
const events = [
  {
    id: 1,
    title: "Careers in Data Panel",
    date: "March 15, 2025",
    location: "UNSW Colombo LG02",
    description: "Hear from data scientists at Google, Atlassian, and Canva.",
    tags: ["Panel", "Career"],
  },
  {
    id: 2,
    title: "Intro to Python Workshop",
    date: "March 22, 2025",
    location: "Online (Zoom)",
    description: "A beginner-friendly crash course in Python for Data Analysis.",
    tags: ["Workshop", "Technical"],
  },
  {
    id: 3,
    title: "Annual Hackathon",
    date: "April 10, 2025",
    location: "UNSW Roundhouse",
    description: "48 hours to solve real-world problems. $2000 prize pool.",
    tags: ["Hackathon", "Social"],
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="group rounded-lg border border-gray-800 bg-gray-900/50 p-6 hover:border-blue-500/50 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-mono text-blue-400">{event.date}</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">{event.tags[0]}</span>
            </div>
            
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{event.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{event.description}</p>
            
            <div className="flex items-center text-sm text-gray-500">
              📍 {event.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}