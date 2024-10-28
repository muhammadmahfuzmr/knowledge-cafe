import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  // console.log(bookMark)
  const { title } = bookMark;
  return (
    <div className="p-5 rounded-lg bg-[#FFFFFF] mb-4 text-[#111111] font-semibold text-lg">
      <h2>{title}</h2>
    </div>
  );
};
BookMark.propTypes = {
  bookMark: PropTypes.object,
};

export default BookMark;
