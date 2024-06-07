"use client";

import Image from "next/image";

const PhotoGallery: React.FC = () => {
  const images = [
    "/karate6.jpg",
    "/karate7.jpg",
    "/karate2.jpg",
    "/karate3.jpg",
    "/karate4.jpg",
    "/karate5.jpg",
    "/walka1.jpg",
    "/walka2.jpg",
    "/walka3.jpg",
    "/walka4.png",
    "/walka5.jpg",
    "/karate1.jpg",
  ];

  return (
    <section className="bg-gray-50 grid grid-rows-[1fr_auto] min-h-screen items-center">
      <div className="h-full p-8 xl:flex xl:items-center xl:flex-col xl:justify-center">
        <div className="grid grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-96 w-96 mb-4"> 
              <Image
                alt={`Gallery image ${index + 1}`}
                src={src}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;