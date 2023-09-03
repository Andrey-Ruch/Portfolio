import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "../../components";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <div className="app__flex">
          <Swiper>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="app__testimonial-item app__flex">
                  <div className="app__testimonial-image">
                    <img
                      src={urlFor(testimonial.imgurl)}
                      alt={testimonial.name}
                    />

                    <div>
                      <h3 className="bold-text">{testimonial.name}</h3>

                      <h5 className="p-text">{testimonial.company}</h5>
                    </div>
                  </div>

                  <div className="app__testimonial-content">
                    <p className="p-text">{testimonial.feedback}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "Testimonial",
  "app__primarybg"
);
