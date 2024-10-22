import noMoney from './assets/no-money.png';
import flexible from './assets/flexible.png';
import responsiveDesign from './assets/responsive-design.png'
import performance from './assets/performance.png';
const settings = {
    
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: true, // Enable arrows for desktop
    autoplay: true, // Enable autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true, // Enable arrows for smaller devices
          centerMode:false ,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true, // Enable arrows for mobile
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };
  export {settings,flexible,noMoney,performance,responsiveDesign}