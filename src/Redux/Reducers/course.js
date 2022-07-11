let initialState = {
  courses: [],
  courseDetail: null,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      state.courses = action.payload;
      console.log(state.courses);
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default CourseReducer;
