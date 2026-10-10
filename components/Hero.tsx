"use client";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.25]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient overlay at top for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
      </div>
    </section>
  );
}
