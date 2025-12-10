// frontend/components/Hero.tsx
interface HeroProps {
  imageUrl: string;
  title?: string;
}

export default function Hero({ imageUrl, title = "UNSW Adventure Society" }: HeroProps) {
  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-md">
          <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Est. 2008</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          Your gateway to the outdoors. Hiking, climbing, and exploring New South Wales.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}