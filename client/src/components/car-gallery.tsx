import { useEffect, useRef } from "react";
import { Car } from "@/data/cars";

interface CarGalleryProps {
  car: Car;
}

export default function CarGallery({ car }: CarGalleryProps) {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Swiper when component mounts
    if (window.Swiper && swiperRef.current) {
      new window.Swiper(swiperRef.current, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
    }
  }, []);

  return (
    <div className="space-y-6">
      <div ref={swiperRef} className="swiper car-gallery">
        <div className="swiper-wrapper">
          {car.gallery.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img
                src={image}
                alt={`${car.name} - Vue ${index + 1}`}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          ))}

        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}
