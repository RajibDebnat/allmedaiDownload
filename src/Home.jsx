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

  useEffect(() => {
    // Load the AdSense ad on component mount
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  function handleUrlSubmit(url) {
    setUrls(url);
  }

  const { links, picture, title } = videoDetails;

  return (
    <main className=" ">
      <ShowCase />
      <div className="ad-container">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9171703337608922"
          data-ad-slot="7053960170"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <PreMadeInput handleSubmit={handleUrlSubmit} searchError={error} />
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
