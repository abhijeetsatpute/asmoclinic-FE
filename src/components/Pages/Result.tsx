import { ImgComparisonSlider } from "@img-comparison-slider/react";
import "./Result.css";
const App = () => {
  return (
    <main className="container">
      <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
        <figure slot="first" className="before">
          <img width={"100%"} src="./assets/images/portfolio/1a.jpg" />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <img width={"100%"} src="./assets/images/portfolio/1b.jpg" />
          <figcaption>After</figcaption>
        </figure>
      </ImgComparisonSlider>
      <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
        <figure slot="first" className="before">
          <img width={"100%"} src="./assets/images/portfolio/2a.jpg" />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <img width={"100%"} src="./assets/images/portfolio/2b.jpg" />
          <figcaption>After</figcaption>
        </figure>
      </ImgComparisonSlider>
      <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
        <figure slot="first" className="before">
          <img width={"100%"} src="./assets/images/portfolio/3a.jpg" />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <img width={"100%"} src="./assets/images/portfolio/3b.jpg" />
          <figcaption>After</figcaption>
        </figure>
      </ImgComparisonSlider>
      <ImgComparisonSlider className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle">
        <figure slot="first" className="before">
          <img width={"100%"} src="./assets/images/portfolio/4a.jpg" />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <img width={"100%"} src="./assets/images/portfolio/4b.jpg" />
          <figcaption>After</figcaption>
        </figure>
      </ImgComparisonSlider>
    </main>
  );
};

export default App;
