import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import axios from "axios";
import { connect } from "react-redux";

class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-2xl text-center py-4">Danh Sách Khóa Học</h1>
        <div className="">
          <div className="grid grid-cols-4 gap-4 mx-14">
            {this.props.courseList.map((item, i) => {
              return (
                <div key={i}>
                  <CourseItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res) =>
        this.props.dispatch({
          type: "FETCH_COURSES",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});

export default connect(mapStateToProps)(HomeScreen);
