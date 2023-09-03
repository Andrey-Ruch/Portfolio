import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import "./Swiper.scss";

// Register Swiper web component
register();

export function Swiper(props) {
  const swiperRef = useRef(null);
  const { children } = props;

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: var(--primary-color);

            @media screen and (max-width: 500px) {
              display: none;
            }
          }

          .swiper-button-next {
            top: initial;
            bottom: 0;
            z-index: 11;

            @media screen and (max-width: 500px) {
              display: none;
            }
          }

          .swiper-button-prev {
            top: initial;
            bottom: 0;
            z-index: 11;

            @media screen and (max-width: 500px) {
              display: none;
            }
          }

          .swiper-button-next svg,
          .swiper-button-prev svg {
            width: 25px;
            height: 25px;
          }

          .swiper-pagination-bullet{
            width: 8px;
            height: 8px;
            background-color: var(--primary-color);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        pagination-clickable="true"
        space-between="100"
        keyboard="true"
        init="false"
      >
        {children}
      </swiper-container>
    </>
  );
}
export function SwiperSlide(props) {
  const { children } = props;

  return <swiper-slide>{children}</swiper-slide>;
}
