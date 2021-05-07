import { connect } from "react-redux";
import { editBlog } from "../Service/Action/action";
import EditBlogComponent from "../MyComponent/Edit";

const mapStateToProps = (state) => ({
  data: state.blogItems.blogData,
});
const mapDispatchToProps = (dispatch) => ({
  EditBlog: (data) => dispatch(editBlog(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditBlogComponent);
