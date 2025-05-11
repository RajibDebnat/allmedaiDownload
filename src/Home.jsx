import { fetchData } from "./ApiFetch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import ShowCase from "./components/ShowCase";
import PreMadeInput from "./components/Input";
import HowToDownload from "./components/HowToDownload";
import Video from "./components/Video";
import { useEffect, useState } from "react";
import TestimonialSlider from "./components/Testimonial";
import DownloadMethod from "./components/DownloadMethod";
import AccordionSection from "./components/Accordion";
import FeatureCards from "./components/Features";
import SignUpForm from "./components/SignUpForm";
import Loading from "./components/Loading";

function Home() {
  const [urls, setUrls] = useState("");
  const [videoDetails, setVideoDetails] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState();

  useEffect(() => {
    setLoad(true);
    setError(false);
    fetchData(urls).then((data) => {
      if (data) {
        setLoad(false);
        setVideoDetails(data);
        console.log("Video details:", data);
      } else {
        setError(true);
      }
    });
  }, [urls, setLoad]);



  function handleUrlSubmit(url) {
    setUrls(url);
  }

  const { links, picture, title } = videoDetails;

  return (
    <main className="  ">
      <ShowCase />
  
      <PreMadeInput handleSubmit={handleUrlSubmit} searchError={error.toString()} />
      <HowToDownload />

      {/* AdSense Ad - Place this where you want the ad to appear */}

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
    </main>
  );
}

export default Home;
