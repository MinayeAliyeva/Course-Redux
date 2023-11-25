import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalCost = useSelector(({ courses: { data, searchTerm } }) =>
    data
      .filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + course.cost, 0)
  );

  return <div className="coursePrice">Toplam Tutar:{totalCost}Tl</div>;
};

export default CourseValue;
