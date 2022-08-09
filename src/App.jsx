import data from "../data";
import Header from "./header";
import Gallery from "./gallery";
import Reviews from "./reviews";
import OnlineExperience from "./online_experiences"
import "./App.css";

function App() {
  const details = data.map((detail) => {
    return <Reviews key="id" {...detail} />;
  });

  return (
    <div className="App">
      <Header />
      <Gallery />
      <OnlineExperience />
      <section className="review_display">{details}</section>
    </div>
  );
}

export default App;
