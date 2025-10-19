import React from "react";
import { FaStar, FaRegStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    id
  } = news;

  // Format the date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 shadow-md border border-base-200 rounded-xl mt-5">
      {/* --- Header --- */}
      <div className="flex justify-between items-center bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{author.name}</h4> 
            <p className="text-sm text-gray-500">{formattedDate}</p> 
          </div>
            </div>
                 
              {/* Share & Bookmark */}
        <div> 
        <button className="btn btn-ghost btn-sm text-gray-500 hover:text-gray-700">
          <FaRegBookmark size={15} />
        </button>
                  
        <button className="btn btn-ghost btn-sm text-gray-500 hover:text-gray-700">
          <FaShareAlt size={15} />
        </button>
                  
        </div>
      </div>

      {/* --- Title --- */}
      <h2 className="px-4 font-bold text-lg text-gray-900 leading-snug pt-3">
        {title}
      </h2>

      {/* --- Thumbnail --- */}
      <figure className="px-4 pt-5">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="rounded-xl w-full object-cover" 
        />
      </figure> 

      {/* --- Description --- */}
      <div className="px-4 py-4 text-sm text-gray-600 leading-relaxed">
        {details.length > 220 ? `${details.slice(0, 220)}...` : details}
        <Link to={`/newsDetails/${id}`} className="ml-1 text-orange-500 font-semibold hover:underline cursor-pointer">
          Read More
        </Link>
      </div>

      {/* --- Footer --- */}
      <div className="card-actions justify-between items-center border-t border-gray-300 px-4 py-3">
        {/* Rating */}
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(5)].map((_, i) =>
            i < Math.round(rating.number) ? (
              <FaStar key={i} />
            ) : (
              <FaRegStar key={i} />
            )
          )}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
