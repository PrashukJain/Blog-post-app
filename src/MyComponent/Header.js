import React from "react";
import home from "../images/home.jpg";
import { useLocation } from "react-router-dom";
import "../CSS/header.css";
import { useHistory, Link } from "react-router-dom";
import { useStore } from "react-redux";
export default function Header(props) {
  const history = useHistory();
  const handleOnClick = () => history.push("/add");
  const handleLink = () => history.push("/");
  console.log("hello");
  const location = useLocation();
  const store = useStore();
  const data = [
    {
      heading: "Post Index Page",
    },
    {
      heading: "Post Details Page",
    },
    {
      heading: "New Post Page",
    },
    {
      heading: "Edit Post Page",
    },
  ];

  let headingUrl = data[props.index];
  let thirdlayer;
  if (props.index === "2" || props.index === "3") {
    thirdlayer = (
      <div style={{ marginTop: "6px" }}>
        <Link onClick={handleLink} to="/">
          back to index
        </Link>
      </div>
    );
  } else if (props.index === "1") {
    let blogs = store.getState().blogItems.blogData;
    const myparam = location.state.params;
    let handleLike = () => {
      let likeCount = blogs[myparam].likeCount;
      blogs[myparam].likeCount = likeCount + 1;
      history.push("/content", { params: myparam });
    };
    thirdlayer = (
      <div className="innerDiv">
        <Link onClick={handleLink} to="/">
          back to index
        </Link>
        <div>
          <button onClick={handleLike}>Like-{blogs[myparam].likeCount}</button>
          <button
            onClick={() => {
              history.push("/edit", { params: myparam });
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.deleteBlog(myparam);
              history.push("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    thirdlayer = (
      <button type="button" className="m-2 newButton" onClick={handleOnClick}>
        New Post
      </button>
    );
  }

  return (
    <div>
      <div className="container-fluid w-100" style={{ display: "block" }}>
        <div className="row">
          <div className="col heading">{headingUrl.heading}</div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Link onClick={handleLink} to="/">
              <img src={home} className="m-2 image" alt="homeSign" />
            </Link>
          </div>
        </div>
        <div className="row footerOfHeader">
          <div>{thirdlayer}</div>
        </div>
      </div>
    </div>
  );
}
