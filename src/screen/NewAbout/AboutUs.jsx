import React from "react";
import images from "../../images";
import Footer from "../NewHome/sub-section/Footer";
import aboutHero from "../../assets/aboutHero.webp";
import aboutbg from "../../assets/aboutbg.png";
import AboutCard from "../../component/AboutCard";

const AboutUs = () => {
  return (
    <>
      <div className="relative flex w-[27rem] sm:w-full flex-wrap justify-evenly items-center gap-10 p-10 bg-[#027BFC]">
        <img className=" absolute w-full h-full" src={aboutbg} alt="" />
        <div className="w-[87%] md:w-[60%]">
          <h2 className="text-[30px] text-white font-poppins text-center xl:text-left pb-5 font-semibold ">
            Our Story
          </h2>
          <p className="text-white font-poppins text-[22px] text-justify xl:text-left">
            Welcome to JotCV, your premier destination for crafting
            Professional Resumes and Video Profile that stand out in the
            competitive job market. Located in the vibrant city of Mumbai,
            India, ResumeBuild.in is dedicated to empowering individuals with
            the tools and expertise to create impressive Resumes with Video
            Profile effortlessly.
          </p>
        </div>
        <div>
          <img className="w-[60%] sm:w-full mx-auto" src={aboutHero} alt="" />
        </div>
      </div>
      <div className="p-12 w-[27rem] sm:w-full mx-auto">
        <h2 className="text-[30px]  font-poppins text-center pb-5 font-semibold ">
          Our Mission
        </h2>
        <p className=" font-poppins text-[22px]  text-justify">
          Our mission at JotCV is to revolutionize the way people approach
          Profile creation. We understand that your Profile is the first
          impression you make on potential employers, and we are committed to
          helping you make it a lasting one. We strive to empower job seekers
          with cutting-edge technology and AI-driven solutions to build Resumes
          with Video Profile that truly reflect their skills, experiences, and
          aspirations.
        </p>
      </div>
      <div>
        <h2 className="text-[30px]  font-poppins text-center pb-5 font-semibold ">
          Why Choose Us
        </h2>
        <div className="p-12 w-[80%] mx-auto flex flex-wrap justify-center gap-14">
          <AboutCard
            heading="User-Friendly Platform"
            subtext="Our intuitive platform makes it easy for users of all skill levels to create professional resumes, even if you have no prior experience."
          />
          <AboutCard
            heading="AI-Powered Assistance"
            subtext="Our AI algorithms provide personalized recommendations and suggestions to enhance your resume's content and appearance."
          />
          <AboutCard
            heading="Video Resumes"
            subtext="Stand out from the crowd by creating customizable Video Resumes that showcase your personality and communication skills."
          />
          <AboutCard
            heading="Multiple Resume Sections"
            subtext="We offer a wide range of customizable sections, including experience,skills,projects, languages, and more, ensuring your resume fits your unique profile."
          />
          <AboutCard
            heading="Unique Templates"
            subtext="Explore our vast collection of unique templates, inspired by the creativity of Zety, NovoResume, kickresume, EnhanCv, and more."
          />
          <AboutCard
            heading="Privacy & Security"
            subtext="Your data's security is our utmost priority. We guarantee the protection of your personal information."
          />
        </div>
        <div>
          <h2 className="text-[#3D3D3D] text-[65px] font-bold text-center">
            Join JotCV Today!
          </h2>
          <p className="font-poppins text-[16px] p-12  text-center">
            Whether you're a seasoned professional or just starting your career
            journey, jotcv.com is your trusted partner in crafting resumes that
            open doors to exciting opportunities. Embrace the future of resume
            creation with us and embark on a journey towards career success.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AboutUs;
