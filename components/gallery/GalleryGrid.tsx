"use client";

import { useState, useEffect } from "react";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "workshop", name: "Workshop" },
    { id: "repairs", name: "Repairs" },
    { id: "diagnostics", name: "Diagnostics" },
    { id: "team", name: "Our Team" },
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Engine Diagnostic Equipment",
      category: "diagnostics",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "State-of-the-art diagnostic equipment for accurate engine analysis",
    },
    {
      id: 2,
      title: "Professional Workshop",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Our fully equipped workshop with modern tools and equipment",
    },
    {
      id: 3,
      title: "Brake System Repair",
      category: "repairs",
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional brake system maintenance and repair services",
    },
    {
      id: 4,
      title: "Oil Change Service",
      category: "repairs",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Quick and efficient oil change services with premium oils",
    },
    {
      id: 5,
      title: "Transmission Repair",
      category: "repairs",
      image:
        "https://images.unsplash.com/photo-1632823471565-1ecdf7c0d8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Expert transmission repair and maintenance services",
    },
    {
      id: 6,
      title: "AC System Service",
      category: "repairs",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Air conditioning system repair and maintenance",
    },
    {
      id: 7,
      title: "Certified Technicians",
      category: "team",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our team of certified automotive technicians",
    },
    {
      id: 8,
      title: "Quality Tools",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional grade tools and equipment for quality service",
    },
    {
      id: 9,
      title: "Computer Diagnostics",
      category: "diagnostics",
      image:
        "https://images.unsplash.com/photo-1609592806787-3d0b4c7b0e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Advanced computer diagnostic systems for accurate troubleshooting",
    },
    {
      id: 10,
      title: "Workshop Interior",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Clean and organized workshop environment",
    },
    {
      id: 11,
      title: "Team at Work",
      category: "team",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our experienced team working on vehicle repairs",
    },
    {
      id: 12,
      title: "Engine Repair",
      category: "repairs",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional engine repair and maintenance services",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openLightbox = (imageId: number) => {
    console.log("Opening lightbox for image:", imageId);
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        switch (e.key) {
          case "Escape":
            closeLightbox();
            break;
          case "ArrowLeft":
            prevImage();
            break;
          case "ArrowRight":
            nextImage();
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square relative">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${image.image})` }}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImageData.image}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6 bg-white">
                <h3 className="text-gray-800 text-xl font-bold mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedImageData.description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {filteredImages.findIndex((img) => img.id === selectedImage) + 1}{" "}
              of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
