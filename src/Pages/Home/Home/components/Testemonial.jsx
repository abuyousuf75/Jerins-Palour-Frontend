import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
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
    axios
      .get("http://localhost:5000/reviews")
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="md:pt-20 pt-5 pb-5 md:pb-20">
      <div className="title text-center">
        <h2 className="text-4xl font-bold">Testimonials</h2>
      </div>
      <Swiper
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-14 ">
            <div className="md:pt-28 pt-6">
              <div className="flex gap-5 ">
                <img src={review.photo} />
                <div>
                  <h3 className="text-2xl font-semibold">{review.name}</h3>
                  <p className="text-lg font-medium">{review.title}</p>
                </div>
              </div>
              <p className="md:max-w-[326px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat{" "}
              </p>
              <Rating
                className="mt-4"
                style={{ maxWidth: 180 }}
                value={review.ratings}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testemonial;
