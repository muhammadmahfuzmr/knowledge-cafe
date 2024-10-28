import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { cover, title, author, author_img, posted_date , reading_time} = blog;
  return (
    <div className="mb-10 border-b-2 pb-10">
      <img className="w-full rounded-lg mb-8" src={cover} alt={`Cover picture of title: ${title}`} />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-16 h-16" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-[#111111]">{author}</h3>
            <p className="text-base font-semibold text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div>
            <p className="text-[#11111199] font-medium text-xl">{reading_time} min read</p>
        </div>
      </div>
      <h2>{title}</h2>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
