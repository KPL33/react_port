
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import './styles.css';
import AdCarouselData from "./AdCarouselData";

export default function AdCarousel() {
  const images = AdCarouselData.map((item) => ({
    original: item.src,
    thumbnail: item.src,
    description: item.description,
  }));

  return (
    <ImageGallery
      items={images}
      slideInterval={5000}
      slideOnThumbnailOver={true}
      showIndex={true}
    />
  );
}
