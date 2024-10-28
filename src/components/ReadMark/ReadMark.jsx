import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const ReadMark = ({ bookMarks, readingTimes }) => {
  return (
    <div className="md:w-1/3">
         <h2 className="py-5 mb-5 rounded-lg border-2 border-[#6047EC]  font-semibold text-2xl bg-[#6047EC1A] text-center text-[#6047EC]">Spent time on read : {readingTimes} min</h2>
         <div className=" p-6 rounded-lg bg-[#1111110D]">
       
       <h1 className="text-2xl mb-4">Bookmarked Blogs: {bookMarks.length}</h1>
       <div>
         {
             bookMarks.map(bookMark=> <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
         }
       </div>
     </div>
    </div>
   
  );
};
ReadMark.propTypes={
    bookMarks: PropTypes.array,
    readingTimes: PropTypes.number
}
export default ReadMark;
