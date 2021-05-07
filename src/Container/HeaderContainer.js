import { connect } from "react-redux";
import headerComponent from "../MyComponent/Header";
import { deleteBlog} from "../Service/Action/action";


const mapStateToProps = (state) => ({
  data: state.blogItems.blogData,
});
const mapDispatchToProps = (dispatch) => ({
  deleteBlog: (index) => dispatch(deleteBlog(index)),
});
export default connect(mapStateToProps, mapDispatchToProps)(headerComponent);
