import React from "react";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const CourseList = () => {
  const courses = useSelector((state) => {
    return state.courses.data;
  });
  // console.log(courses);
  const renderedCourses = courses.map((course) => {
    return (
      <div className="panel" key={course.id}>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.configureStore}</p>
        <button className="button is-danger">Sil</button>
      </div>
    );
  });
  return <div>{renderedCourses}</div>;
};

export default CourseList;
