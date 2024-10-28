import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import ReadMark from "./components/ReadMark/ReadMark";

function App() {
  return (
    <div className="max-w-[1280px] m-auto mt-3">
      <Header></Header>
      <div className="md:flex mt-4 items-start p-4 gap-6">
        <Blogs></Blogs>
        <ReadMark></ReadMark>
      </div>
    </div>
  );
}

export default App;
