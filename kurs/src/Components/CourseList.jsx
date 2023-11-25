import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, updateData } from "../store/slices/CourseSlice";
const CourseList = () => {
  const dispatch = useDispatch();
  // const { courses } = useSelector((state) => {
  //   const filteredCourses = state.courses.data.filter((course) => {
  //     return course.name
  //       .toLowerCase()
  //       .includes(state.courses.searchTerm.toLowerCase());
  //   });
  //   return {
  //     courses: filteredCourses,
  //   };
  // });
  const { courses } = useSelector(({ courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      courses: filteredCourses,
    };
  });
  const renderedCourses = courses.map((course) => {
    return (
      <div className="panel" key={course.id}>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          onClick={() => dispatch(deleteCourse(course.id))}
          className="button is-danger"
        >
          Sil
        </button>
        <button
          className=" button is-success"
          onClick={() => dispatch(updateData(course.id))}
        >
          Edit
        </button>
      </div>
    );
  });
  return <div>{renderedCourses}</div>;
};

export default CourseList;
