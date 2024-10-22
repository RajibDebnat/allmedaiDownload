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
function App() {
  const [urls, setUrls] = useState("");
  const [videoDetails, setVideoDetails] = useState("");
  const [error,setError] = useState('')

  useEffect(() => {
    fetchData(urls).then((data) => {
      if (data) {
        setVideoDetails(data);  
        console.log("Video details:", data);
      } else {
        console.log("Failed to fetch video details.");
      }
    });
  }, [urls]);

  function handleUrlSubmit(url) {
    // console.log(url)
    setUrls(url);
    
    // console.log(urls)
  }
  const { links, picture, title } = videoDetails;

  return (
    <main className=" ">
      <Header />
      <ShowCase/>
      <PreMadeInput handleSubmit={handleUrlSubmit} />
      <HowToDownload />
      <Video thumbnail={picture} title={title} links={links} />
      <FeatureCards/>
      <DownloadMethod/>
      <TestimonialSlider/>
      <AccordionSection/>
      <SignUpForm/>
      <Footer/>
    </main>
  );
}

export default App;
