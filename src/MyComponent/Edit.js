import React, { useState } from "react";
import Header from "../Container/HeaderContainer";
import "../CSS/content.css";
import { useStore } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

export default function Edit(props) {
  const location = useLocation();
  const param = location.state.params;
  const history = useHistory();
  const store = useStore();
  let blogs = store.getState().blogItems.blogData;
  const [title, setTitle] = useState(blogs[param].title);
  const [categories, setCategories] = useState(blogs[param].categories);
  const [content, setContent] = useState(blogs[param].content);
  
  let handle = () => {
    if (title === "" || categories === "" || content === "") {
      alert("Please enter data in all input fields ");
    } else {
      props.EditBlog({
        title: title,
        categories: categories,
        content: content,
        likeCount: blogs[param].likeCount,
        index:param
      });
      history.push("/");
    }
  };

  return (
    <>
      <Header index="3" />
      <div className="contentContainer">
        <div className="w-75 mt-2 container">
          <div className="mb-3">
            <label htmlFor="inputTitle" className="font-weight-bold">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputCategories" className="font-weight-bold">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCategories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1">Content</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <button onClick={handle}>Submit</button>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
