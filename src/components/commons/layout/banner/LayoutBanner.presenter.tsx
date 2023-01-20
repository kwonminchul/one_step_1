import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <SliderItem src="/b1.png" />
        </div>
        <div>
          <SliderItem src="/b2.png" />
        </div>
        <div>
          <SliderItem src="/b3.png" />
        </div>
        <div>
          <SliderItem src="/b4.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
