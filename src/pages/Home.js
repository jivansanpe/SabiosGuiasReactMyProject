import FooterHome from "../components/FooterHome";
import HeaderHome from "../components/HeaderHome";
import banner from "../images/banner.jpg";
import Grid from "../components/FullWithGrid";
import ReactSimplyCarouselExample from "../components/Carousel";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <div class="fluid">
        <img src={banner} width="100%" />
        <Grid />
        <ReactSimplyCarouselExample />
      </div>

      <FooterHome />
    </>
  );
}