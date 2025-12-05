import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mountain.jpg"
          alt="Stunning mountain view from Fjellro cabin in Syndin, Norway"
          fill
          className="object-cover"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Syndin, Vestre Slidre • Near Fagernes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            Experience
            <span className="block text-fjellro-wood-300">Mountain Calm</span>
            at Fjellro
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
            A luxury Norwegian cabin retreat nestled in the heart of Vestre Slidre, 
            where pristine mountains meet ultimate comfort and tranquility.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-fjellro-wood-300" />
              <span>Premium Mountain Views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-fjellro-wood-300" />
              <span>Hiking & Skiing Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-fjellro-wood-300" />
              <span>Modern Scandinavian Design</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="inline-flex items-center space-x-2 bg-fjellro-pine-600 hover:bg-fjellro-pine-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span>View Gallery</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}