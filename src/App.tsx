import "./App.css";
import ApproachSection from "./components/ApproachSection/ApproachSection";
import Footer from "./components/Footer/Footer";
import FunctionalSection from "./components/FunctionalSection/FunctionalSection";
import ProblemsSection from "./components/ProblemsSection/ProblemsSection";
import TopSide from "./components/TopSide/TopSide";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";

function App() {
  return (
    <div>
      <section id="main">
        <TopSide />
      </section>
      <section id="problems">
        <ProblemsSection />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="functional">
        <FunctionalSection />
      </section>
      <section id="approach">
        <ApproachSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
