import "./App.css";
import SplashPage from "./component/SplashPage/SplashPage";
import Navbar from "./component/partials/Navbar/Navbar";
import Circles from "./component/partials/background/Circles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SplashPage />
    </div>
  );
}

export default App;
