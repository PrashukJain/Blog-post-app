import React, { useState } from "react";
import "../CSS/content.css";
import { useHistory } from "react-router-dom";
export default function AddBlog(props) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  let handle = (e) => {
    if (title === "" || categories === "" || content === "") {
      alert("Please enter data in all input fields ");
    } else {
      props.addToBlogHandler({
        title: title,
        categories: categories,
        content: content,
        likeCount: 0,
      });
      history.push("/");
    }
  };
  return (
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
  );
}
