import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import screenshot1 from "../../public/images/Rectangle 61.svg";
import screenshot2 from "../../public/images/Rectangle 62.svg";
import screenshot3 from "../../public/images/Rectangle 64.svg";
import screenshot4 from "../../public/images/Rectangle 65.svg";
import screenshot5 from "../../public/images/Rectangle 66.svg";
import { Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  // Array of image data
  const screenshots = [
    { src: screenshot1, alt: "Screenshot 1" },
    { src: screenshot2, alt: "Screenshot 2" },
    { src: screenshot3, alt: "Screenshot 3" },
    { src: screenshot4, alt: "Screenshot 4" },
  ];

  return (
    <section>
      <div className="bg-[#FBFBFB] pt-8 pb-12 flex flex-col space-y-8 items-center">
        <div className="mx-auto text-center flex flex-col space-y-6">
          <h2 className="text-center text-3xl text-primary text-4xl font-bold">
            Our App <br /> Screenshots
          </h2>
          <p className="text-center">Take a tour of our app</p>
        </div>

        <div>
          <Swiper
            loop={true}
            spaceBetween={8}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide key={index} className="mb-12">
                <div className="flex justify-center items-center space-x-4">
                  <Image
                    // className="block h-full w-full object-cover"
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={224}
                    height={200}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
