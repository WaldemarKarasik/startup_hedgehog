"use client";
import { useRef, useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ImageGallery = ({ images }: { images: string[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollToImage = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth; // Scroll exactly one container width
    const currentScroll = container.scrollLeft;

    if (direction === "right") {
      setActiveIndex(activeIndex + 1);
      container.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    } else {
      setActiveIndex(activeIndex - 1);

      container.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Alternative: Scroll to specific image index
  const scrollToImageIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    setActiveIndex(index);

    const container = scrollContainerRef.current;
    const imageElements = container.querySelectorAll("img");
    if (imageElements[index]) {
      imageElements[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container?.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [images]);

  return (
    <Card title="Изображения" className="shadow-sm">
      <div className="flex justify-between gap-5 items-center">
        <ArrowLeft
          size={45}
          className={`grow-1 shrink-0 cursor-pointer transition-opacity text-lg ${
            canScrollLeft
              ? "hover:opacity-70 opacity-100"
              : "opacity-30 cursor-not-allowed"
          }`}
          onClick={canScrollLeft ? () => scrollToImage("left") : undefined}
        />

        <div
          ref={scrollContainerRef}
          className="grid auto-cols-[100%] grid-flow-col overflow-x-auto overflow-y-hidden gap-10 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {images.map((img, index) => (
            <div
              key={img}
              className="snap-start snap-always flex-shrink-0 w-full"
              onClick={() => scrollToImageIndex(index)}
            >
              <Image
                className="cursor-pointer w-full h-auto object-contain max-h-96"
                src={`http://${img}`}
                alt={`продукт ${index + 1}`}
                preview
                width="100%"
                height="auto"
              />
            </div>
          ))}
        </div>

        <ArrowRight
          size={45}
          className={`grow-1 shrink-0 cursor-pointer transition-opacity ${
            canScrollRight
              ? "hover:opacity-70 opacity-100"
              : "opacity-30 cursor-not-allowed"
          }`}
          onClick={canScrollRight ? () => scrollToImage("right") : undefined}
        />
      </div>

      {/* Optional: Image indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors ${activeIndex == index && "bg-gray-400"}`}
            onClick={() => scrollToImageIndex(index)}
          />
        ))}
      </div>
    </Card>
  );
};
