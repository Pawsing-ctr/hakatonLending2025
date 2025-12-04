import "./App.css";
import ApproachSection from "./components/ApproachSection/ApproachSection";
import Footer from "./components/Footer/Footer";
import ProblemsSection from "./components/ProblemsSection/ProblemsSection";
import TopSide from "./components/TopSide/TopSide";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";

function App() {
  return (
    <div>
      <TopSide />
      <ProblemsSection />
      <WhyUsSection />
      <ApproachSection />
      <Footer />
    </div>
  );
}

export default App;
