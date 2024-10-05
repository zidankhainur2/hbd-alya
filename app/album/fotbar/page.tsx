"use client";

import Image from "next/image";
import { useState } from "react";

export default function FotbarAlbum() {
  const images = [
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar1.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar2.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar3.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar4.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar5.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar6.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar7.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar8.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar9.jpg",
    "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar10.jpg",

    // Tambahkan lebih banyak URL gambar jika diperlukan
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    // Swipe threshold to consider it a swipe gesture
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      showNextImage(); // Geser ke kiri untuk foto selanjutnya
    } else if (distance < -minSwipeDistance) {
      showPreviousImage(); // Geser ke kanan untuk foto sebelumnya
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="px-5">
      <h1 className="text-white text-lg font-medium mb-2 text-center">
        FOTBAR
      </h1>
      <p className="text-gray-400 text-xs text-center mb-4">
        INI SERIUS KITA BARU BISA FOTBAR 3 TAHUN LAGI ?!?! {":)"}
      </p>
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {images.map((src, index) => (
          <article
            key={index}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              alt={`image-${index}`}
              src={src}
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
          </article>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-20"
            >
              &times;
            </button>
            <Image
              alt={`image-${currentIndex}`}
              src={images[currentIndex]}
              className="w-full h-auto object-contain"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={showPreviousImage}
                className="text-white text-4xl p-2"
                disabled={currentIndex === 0}
              >
                &#8249;
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={showNextImage}
                className="text-white text-4xl p-2"
                disabled={currentIndex === images.length - 1}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
