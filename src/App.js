import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App" id="page-container">
      <Navigation />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
