import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <div className="home">
      <Swiper>
        <SwiperSlide>
          <div className="thatbody">
            <img
              src="/assets/thatbody.jpg"
              alt="Single cover art for That Body"
            />
            <h1 className="text">
              <em>
                THAT BODY
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; OUT NOW
              </em>
            </h1>
          </div>
        </SwiperSlide>
        {/*<SwiperSlide>
          <div className="testSlide">
            <h1 className="text">TEST SLIDE</h1>
          </div>
  </SwiperSlide>*/}
      </Swiper>
    </div>
  );
};

export default Home;
