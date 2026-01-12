// "use client";

// import { useState } from "react";

// export default function FullscreenCarousel({ images }: { images: string[] }) {
//   const [current, setCurrent] = useState(0);

//   const next = () =>
//     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   const prev = () =>
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div
//         className="flex transition-transform duration-700"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             className="w-full h-screen object-cover flex-shrink-0"
//             alt=""
//           />
//         ))}
//       </div>

//       <button
//         onClick={prev}
//         className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
//       >
//         ❮
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
//       >
//         ❯
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function Carousel({ images }: { images: string[] }) {
//   const [current, setCurrent] = useState(0);

//   const next = () =>
//     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   const prev = () =>
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             className="w-full flex-shrink-0 object-cover"
//             alt=""
//           />
//         ))}
//       </div>

//       {/* Buttons */}
//       <button
//         className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full"
//         onClick={prev}
//       >
//         ❮
//       </button>
//       <button
//         className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white rounded-full"
//         onClick={next}
//       >
//         ❯
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2
                 bg-black/50 text-white px-3 py-1 rounded-full cursor-pointer"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2
                 bg-black/50 text-white px-3 py-1 rounded-full cursor-pointer"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
