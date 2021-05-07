import { connect } from "react-redux";
import addBlogComponent from "../MyComponent/AddBlog";
import { addBlog } from "../Service/Action/action";

const mapStateToProps = (state) => ({
  data: state.blogItems.blogData,
});
const mapDispatchToProps = (dispatch) => ({
  addToBlogHandler: (data) => dispatch(addBlog(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(addBlogComponent);
