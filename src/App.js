import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import NewSection from "./components/NewSection/NewSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <NewSection />
      <Footer/>
    </div>
  );
}

export default App;
