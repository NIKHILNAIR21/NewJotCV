import React from "react";
import Company from "./sub-section/Company";
import Footer from "./sub-section/Footer";
import Money from "./sub-section/Money";
import Review from "./sub-section/Review";
import Showcase from "./sub-section/Showcase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import hero from "../../assets/hero1.mp4";
import web from "../../assets/web.webp";
import web1 from "../../assets/web1.webp";
import web3 from "../../assets/web3.webp";
import web4 from "../../assets/web4.webp";
import web5 from "../../assets/web5.webp";
import intersect from "../../assets/job_newsLetter.png";
import icon from "../../assets/send.png";
import homebg from "../../assets/homebg-3.png";
import video1 from "../../assets/v1.mp4";
import home from "../../assets/home.png";
import video2 from "../../assets/v2.mp4";
import video3 from "../../assets/video3.mp4";
import { newLetter } from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { getToken } from "../../session";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Faq from "./sub-section/Faq";
import styles from "./styles.module.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Home = ({ onLoginClick }) => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/resumes");
    }
  }, []);

  const handleSubmit = async () => {
    if (email !== "") {
      let data = {
        email: email,
      };

      try {
        let response = await newLetter(data);
        if (response?.status == 201) {
          showNotification("success", "Subscribed Successfully");
          setEmail("");
        }
      } catch (error) {}
    } else {
      showNotification("danger", "Email was not send");
    }
  };

  const videoRef1 = React.useRef(null);
  const videoRef2 = React.useRef(null);
  const videoRef3 = React.useRef(null);

  const playVideo = (videoId) => {
    const video = document.getElementById(videoId);
    if (document.visibilityState === "visible" && document.hasFocus()) {
      video.play().catch((error) => console.error("Play error:", error));
      video.removeAttribute("controls");
    }
  };

  const pauseVideo = (videoId) => {
    const video = document.getElementById(videoId);
    video.pause();
    video.load();
  };

  return (
    <>
      <div className="main font-poppins z-30 w-[27rem] mx-auto sm:w-full relative mt-0  overflow-hidden ">
        <main className="h-full flex flex-col relative w-full justify-center   mx-auto  items-center ">
          <img
            className="absolute   -z-10 bottom-32 md:-bottom-44 lg:-bottom-36 w-full animate-spin-slow"
            src={homebg}
            alt=""
          />

          <div className="hero-text flex  flex-col item-center animate-fade-up mb-40 animate-once animate-duration-700 mt-4 md:mt-14 animate-delay-200">
            <h1 className="text-[17.5px] my-3 md:my-3 sm:text-[26px] font-semibold font-poppins text-white md:text-[28px] mt-1.5  lg:text-[40px] xl:text-[58.2px] text-center md:px-2.5 ">
              Automate your Job hunt <br /> with JotCV
            </h1>
            <div className="text-slate-50 text-center text-[13px]  md:text-xl ">
              Don't settle for less, Get more with JotCV
            </div>

            <button
              type="button"
              className=" px-8 sm:px-12 mt-8 mb-24 py-1 sm:py-2.5  mx-auto font-poppins  sm:text-base md:text-3xl  w-fit font-semibold bg-white text-sky-600 rounded-r-full rounded-l-full"
              onClick={onLoginClick}
            >
              Login
            </button>
          </div>
        </main>

        <section className="mt-4 sm:mt-96">
          <Company />
        </section>
        <section className="mt-24">
          <Showcase />
        </section>

        <section className="mt-24">
          <Money LoginClick={onLoginClick} />
        </section>
        <div className="mt-24">
          <div className="pb-7 text-center ">
            <h2 className="text-2xl md:text-4xl p-2 font-poppins font-medium">
              Explore Video Profile
            </h2>
            <p className="text-base font-poppins">
              Highlight your skillset & individual personality in an innovative
              way
            </p>
          </div>
          {/* <img className="w-[60%] mx-auto" src={video} alt="" /> */}
          <div className="flex gap-16 flex-wrap justify-center">
            <video
              id="1"
              ref={videoRef1}
              width="420"
              height="240"
              onMouseEnter={() => playVideo("2")}
              onMouseLeave={() => pauseVideo("2")}
            >
              <source src={video1} type="video/mp4" />
            </video>
            <video
              id="2"
              ref={videoRef2}
              width="420"
              height="240"
              muted={true}
              onMouseEnter={() => playVideo("2")}
              onMouseLeave={() => pauseVideo("2")}
            >
              <source src={video2} type="video/mp4" />
            </video>
            <video
              id="3"
              ref={videoRef3}
              width="420"
              height="240"
              onMouseEnter={() => playVideo("3")}
              onMouseLeave={() => pauseVideo("3")}
            >
              <source src={video3} type="video/mp4" />
            </video>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => onLoginClick()}
              className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-l-full text-lg rounded-r-full font-semibold p-2 px-5 text-white font-poppins"
            >
              Explore Video Profile
            </button>
          </div>
        </div>

        <div className="mt-24">
          <div className=" p-3 font-poppins ">
            <div className="pb-7 text-center ">
              <h2 className="text-2xl md:text-4xl p-2 font-poppins font-medium">
                Explore Web Portfolio
              </h2>
              <p className="text-base font-poppins">
                Build a personal website in minutes to show the world who you
                are
              </p>
            </div>
            <div className="w-full">
              {/* <div>
                <img className="w-[500px] rounded-md" src={web1} alt="" />
              </div> */}
              <Carousel
                responsive={responsive}
                arrows={false}
                centerMode={true}
                customTransition="transform 1000ms ease-in-out"
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1200}
                className=""
              >
                <div>
                  <img
                    width="900px"
                    height="210px"
                    onClick={onLoginClick}
                    className=" px-4 rounded-md"
                    src={web1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width="900px"
                    height="210px"
                    onClick={onLoginClick}
                    className=" px-4 rounded-md"
                    src={web3}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width="900px"
                    height="210px"
                    onClick={onLoginClick}
                    className=" px-4 rounded-md"
                    src={web4}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width="900px"
                    height="210px"
                    onClick={onLoginClick}
                    className=" px-4 rounded-md"
                    src={web}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    width="900px"
                    height="210px"
                    onClick={onLoginClick}
                    className=" px-4 rounded-md"
                    src={web5}
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={onLoginClick}
                className="bg-gradient-to-r font-poppins from-sky-400 to-sky-600 rounded-l-full text-lg rounded-r-full font-semibold p-2 px-5 text-white font-poppins"
              >
                Explore Web Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="pb-1  text-center ">
            <h2 className="text-2xl md:text-4xl p-2 font-poppins font-medium">
              People love using JotCV
            </h2>
          </div>
          <Review />
        </div>

        <div className="mt-24">
          <Faq />
        </div>
        <div className="mt-20 sm:mt-36 ">
          <div className="relative rounded-3xl  w-[430px] sm:w-[760px] md:w-[1200px] mx-auto h-[500px] ">
            <img
              className="absolute left-0 right-0 w-[26rem] h-[8rem] mx-auto sm:w-full sm:h-fit"
              src={intersect}
              alt=""
            />
            <div className="px-2 sm:px-3 md:px-9">
              <h2 className="text-[10px] sm:text-[20px] md:text-[30px] text-white font-semibold font-poppins text-left pt-3  sm:pt-4 md:pt-12  px-4 relative z-10 ">
                Want jobs and news letter in your Inbox?
              </h2>
              <p className="text-[9px] sm:text-[16.2px] font-poppins text-left relative z-10 px-4 text-white">
                Recive latest news, update, and many other things <br /> every
                week.{" "}
              </p>

              <div className="bg-white mt-4 flex w-[38%] sm:w-[40%] px-2.5 sm:px-4 p-0.5 sm:p-1.5 mx-3 relative z-10 justify-between items-center rounded-[12px] ">
                <input
                  className="outline-none placeholder:text-[10px] sm:placeholder:text-[13px] py-1 font-semibold w-[90%]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email address"
                />{" "}
                <button>
                  <img
                    className=" bg-sky-500 rounded-xl w-5 h-5 sm:w-10 sm:h-9 pt-1 sm:pt-1.5 px-1 sm:px-2  "
                    src={icon}
                    alt=""
                    onClick={() => handleSubmit()}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-0 sm:mt-1 ">
          <Footer onLoginClick={onLoginClick} />
        </div>
      </div>
    </>
  );
};

export default Home;
