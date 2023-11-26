import "./styles.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdShowcase from "../CarouselImages";

const Carousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000
    };

    return (
        <div className="ad-carousel">
            <Slider  {...settings}>
                {AdShowcase.map((item) => (
                    <div key={item.id}>
                        <div className="img-body">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        <div className="info">
                            <h2 className="ad-title">{item.title}</h2>
                            <p className="ad-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
