import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleBookMarks , handleReadingTimes}) => {
   const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div>
                {
                    blogs.map(blog=> <Blog key={blog.id} handleReadingTimes={handleReadingTimes}  handleBookMarks={handleBookMarks} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes={
    handleBookMarks: PropTypes.func,
    handleReadingTimes: PropTypes.func
}

export default Blogs;