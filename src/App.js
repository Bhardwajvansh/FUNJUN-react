import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Idea from "./Component/Idea/Idea";
import Bot from "./Component/Bot/Bot";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Idea />
      {/* <Bot/> */}
    </div>
  );
}

export default App;
