import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "../../components";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Projects</span>
      </h2>

      {works.length && (
        <>
          <div className="app__flex">
            <Swiper>
              {works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="card-container app__flex">
                    <div className="work-card app__flex">
                      <div className="img-content">
                        <img src={urlFor(work.imgUrl)} alt={work.name} />
                      </div>

                      <div className="content">
                        <p className="heading">{work.title}</p>

                        <p>{work.description}</p>

                        <div className="links">
                          <a
                            href={work.projectLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="app__flex">
                              <AiFillEye />
                            </div>
                          </a>

                          <a
                            href={work.codeLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="app__flex">
                              <TbBrandGithubFilled />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "Projects",
  "app__primarybg"
);
