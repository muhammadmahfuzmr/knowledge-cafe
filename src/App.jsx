import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import ReadMark from "./components/ReadMark/ReadMark";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0)
  const handleBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
    // console.log(blog);
  
    
  };
  const handleReadingTimes = (times)=>{
    // console.log('added reading times')
    setReadingTimes(readingTimes + times)
    // console.log(times)
  }
  // console.log(bookMarks)
  return (
    <div className="max-w-[1280px] m-auto mt-3">
      <Header></Header>
      <div className="md:flex mt-4 items-start p-4 gap-6">
        <Blogs handleBookMarks={handleBookMarks} handleReadingTimes={handleReadingTimes}></Blogs>
        <ReadMark bookMarks={bookMarks} readingTimes={readingTimes}></ReadMark>
      </div>
    </div>
  );
}

export default App;
