import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../store/slices/CourseSlice";
const CourseList = () => {
  const dispatch=useDispatch()
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
        <button  onClick={()=>dispatch(deleteCourse(course.id))} className="button is-danger">Sil</button>
      </div>
    );
  });
  return <div>{renderedCourses}</div>;
};

export default CourseList;
