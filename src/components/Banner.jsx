import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Escape to Nature",
    subtitle: "Explore serene mountains & forests 🌲",
    imageUrl:
      "https://images.unsplash.com/photo-1515310787031-25ac2d68610d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Beachside Bliss",
    subtitle: "Relax on tropical golden shores 🏖️",
    imageUrl:
      "https://images.unsplash.com/photo-1647441167595-2db0166db955?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Urban Adventure",
    subtitle: "Discover cities full of life & lights 🌆",
    imageUrl:
      "https://images.unsplash.com/photo-1649601999043-57f1970f9bfe?q=80&w=1936&auto=format&fit=crop",
  },
];

const BannerCarousel = () => {
  return (
    // Responsive height with maximum caps on larger screens
    <div className="w-full h-[50vh] md:h-[80vh] lg:h-[80vh] lg:max-h-[600px] xl:max-h-[700px] overflow-hidden rounded-md">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        navigation
        className="relative h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Full image */}
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />

              {/* Text + Button */}
              <div className="relative z-20 flex flex-col items-center justify-center text-white text-center h-full px-4">
                <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg transition-all duration-700">
                  {slide.title}
                </h2>
                <p className="mt-3 text-lg md:text-xl text-white/90">
                  {slide.subtitle}
                </p>
                <Link
                  to={"/tourist-spots/"}
                  className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-600 hover:text-white transform hover:scale-105 active:scale-95 transition duration-200 ease-in-out"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrow + bullet styles */}
      <style>{`
      /* Hide arrows on md screens and smaller */
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #d1d5db;
          opacity: 0.3;
        }

        .swiper-pagination-bullet {
          background-color: #9ca3af;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background-color: #d1d6db;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BannerCarousel;
