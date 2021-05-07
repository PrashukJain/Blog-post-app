import React from "react";
import "../CSS/content.css";
import { useLocation } from "react-router-dom";
import { useStore } from "react-redux";
import Header from "../Container/HeaderContainer";
export default function Content(props) {
    const location = useLocation();
    const myparam = location.state.params;
    const store = useStore();
    let blogs = store.getState().blogItems.blogData;
   
    let object=blogs[myparam];
  return (
    <>
    <Header index='1'/>
    <div className="contentContainer">
      <div className="w-75 mt-2 container">{object.content}</div>
    </div>
    </>
  );
}
