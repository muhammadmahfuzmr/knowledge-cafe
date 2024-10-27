import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="max-w-[1280px] m-auto mt-3">
     <Header></Header>
     <Blogs></Blogs>
    </div>
  );
}

export default App;
