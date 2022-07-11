import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="" />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=ITEC2106",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSE_DETAIL",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});

export default connect(mapStateToProps)(CourseDetailScreen);
