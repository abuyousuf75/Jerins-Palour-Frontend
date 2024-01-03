import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";

const Testemonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("Reviews.json").then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="pt-20 pb-20">
      <div className="title text-center">
        <h2 className="text-4xl font-bold">Testimonials</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div>
              <img src={review.photo} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testemonial;
