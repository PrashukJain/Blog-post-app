import React from "react";
import "../CSS/content.css";
import "../CSS/blogs.css";
import { useStore } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Blogs() {
  const store = useStore();
  let blogs = store.getState().blogItems.blogData;
  const history = useHistory();
  let handleClick = (e) => {
    let element=e.target.getAttribute("value");
    history.push("/content",{params:element});
  };
  if (blogs && blogs.length > 0) {
    return (
      <div className="contentContainer">
        <div className="w-75 mt-2 container">
          {blogs.map(function (d, idx) {
            return (
              <div
                className="element"
                onClick={handleClick}
                key={idx}
                value={idx}
              >
                {d.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="contentContainer">
        <div className="w-75 mt-2 container"></div>
      </div>
    );
  }
}
