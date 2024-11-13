import { fetchData } from "./ApiFetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Header from "./components/Header";
import HowToDownload from "./components/HowToDownload";
import PreMadeInput from "./components/Input";
import ShowCase from "./components/ShowCase";
import Video from "./components/Video";
import { useEffect, useRef, useState } from "react";
import TestimonialSlider from "./components/Testimonial";
import DownloadMethod from "./components/DownloadMethod";
import AccordionSection from "./components/Accordion";
import { faqs } from "./constant";
import FeatureCards from "./components/Features";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
function Home() {
  const [urls, setUrls] = useState("");
  const [videoDetails, setVideoDetails] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState();
  useEffect(() => {
    setLoad(true),
    setError(false)
      fetchData(urls).then((data) => {
        if (data) {
          setLoad(false);
          setVideoDetails(data);
          console.log("Video details:", data);
        } else {
         setError(true)
        }
      });
  }, [urls, setLoad]);

  function handleUrlSubmit(url) {
    // console.log(url)
    setUrls(url);

    // console.log(urls)
  }
  console.log(videoDetails);
  const { links, picture, title } = videoDetails;
  console.log("hey");
  console.log(load);
  return (
    <main className=" ">
      {/* <Header /> */}
      <ShowCase />
      <PreMadeInput handleSubmit={handleUrlSubmit} searchError={error} />
      <HowToDownload />
      {load && !error ? (
        <Loading />
      ) : (
        <Video thumbnail={picture} title={title} links={links} />
      )}
      <FeatureCards />
      <DownloadMethod />
      <TestimonialSlider />
      <AccordionSection />
      <SignUpForm />
      {/* <Footer/> */}
    </main>
  );
}

export default Home;
