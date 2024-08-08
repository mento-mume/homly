import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Testimonialcard from "../components/Testimonialcard";
import Hausa from "../../public/images/picture.png";

const TestimonialcardDetails = [
  {
    icon: Hausa,
    name: "Okoli",
    title: "Bill Payment",
    text: "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person.",
  },
  {
    icon: Hausa,
    name: "Okoli",
    title: "Bill Payment",
    text: "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person.",
  },
  {
    icon: Hausa,
    name: "Okoli",
    title: "Bill Payment",
    text: "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person.",
  },
  {
    icon: Hausa,
    name: "Okoli",
    title: "FM Greenbox",
    text: "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person.",
  },
];
const Testimonials = () => {
  return (
    <section>
      <div className="px-5 pt-12 space-y-4 text-center ">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-xl font-semibold ">
          See what they are saying about <br /> us
        </p>
      </div>

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mx-auto"
      >
        {TestimonialcardDetails.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonialcard
              icon={testimonial.icon}
              name={testimonial.name}
              text={testimonial.text}
              title={testimonial.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
