import { ImgComparisonSlider } from "@img-comparison-slider/react";
import "./Result.css";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Server } from "../../util/url";
import MUILoader from "../MUILoader";
const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(Server("/api/v1/results"));
        setResults(response.data.results);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching gallery images");
        console.error("Error fetching doctors:", error);
        setLoading(true);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return <MUILoader />;
  }

  const renderResultList = () => {
    return results.map((result: any) => {
      return (
        <ImgComparisonSlider
          key={result.id}
          className="d-flex mx-auto gap-5 flex-column mb-5 slider-with-animated-handle"
        >
          <figure slot="first" className="before">
            <img width={"100%"} src={result.afterImage} />
            <figcaption>Before</figcaption>
          </figure>
          <figure slot="second" className="after">
            <img width={"100%"} src={result.beforeImage} />
            <figcaption>After</figcaption>
          </figure>
        </ImgComparisonSlider>
      );
    });
  };
  return <main className="container">{renderResultList()}</main>;
};

export default App;
