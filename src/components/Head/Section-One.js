import Header from "../common/Header";
import CreativeBody from "./Creative-Body";

function SectionOne() {
  return (
    <div className="App">
      <section className="section_1">
        <Header />
        <CreativeBody />
        <div className="overlay"></div>
      </section>
    </div>
  );
}

export default SectionOne;
