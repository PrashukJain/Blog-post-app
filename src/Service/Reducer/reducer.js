import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG} from "../constants";
const initialState = {
  blogData: [],
};
export default function blogItems(state = initialState, action) {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogData: [...state.blogData, action.data],
      };
    case DELETE_BLOG:
      let newState = [...state.blogData];
      newState.splice(action.data, 1);
      return {
        ...state,
        blogData: [...newState],
      };
    case EDIT_BLOG:
      let index = action.data.index;
      state.blogData[index].title = action.data.title;
      state.blogData[index].categories = action.data.categories;
      state.blogData[index].content = action.data.content;
      state.blogData[index].likeCount = action.data.likeCount;
      return {
        ...state,
        blogData: [...state.blogData],
      };


    default:
      return state;
  }
}
