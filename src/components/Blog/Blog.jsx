import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";
const Blog = ({ blog, handleBookMarks, handleReadingTimes }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 border-b-2 pb-10">
      <img
        className="w-full rounded-lg mb-8"
        src={cover}
        alt={`Cover picture of title: ${title}`}
      />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img className="w-16 h-16" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-[#111111]">{author}</h3>
            <p className="text-base font-semibold text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#11111199] font-medium text-xl">
            {reading_time} min read
          </p>
          <button onClick={()=>handleBookMarks(blog)} className="text-2xl">
            <BiBookmark></BiBookmark>
          </button>
        </div>
      </div>
      <h2 className="font-bold text-[40px] text-[#111111] mb-4">{title}</h2>
      <div className="font-medium text-xl text-[#11111199] flex gap-4 items-center">
        {
          hashtags.map((hash, idx)=> <p key={idx}># {hash}</p>)
        }</div>
      <button onClick={()=>handleReadingTimes(reading_time, id)} className="mt-6 text-[#6047EC] text-xl font-semibold underline">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMarks: PropTypes.func,
  handleReadingTimes: PropTypes.func
};
export default Blog;
