const team = [
  { name: "Alex Chen", role: "President", image: "https://i.pravatar.cc/150?u=a" },
  { name: "Sarah Smith", role: "V.P. Internal", image: "https://i.pravatar.cc/150?u=b" },
  { name: "James Lee", role: "Head of IT", image: "https://i.pravatar.cc/150?u=c" },
  { name: "Priya Patel", role: "Treasurer", image: "https://i.pravatar.cc/150?u=d" },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Meet the Execs</h1>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        The team working hard behind the scenes to bring you the best Data Science experience at UNSW.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-800 hover:border-blue-500 transition">
              {/* Using standard img for simplicity, use next/image in production */}
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-blue-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}