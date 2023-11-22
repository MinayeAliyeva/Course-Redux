import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/CourseSlice";
import { useState } from "react";
const CourseSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  useEffect(() => {
    dispatch(changeSearchTerm(value));
  }, [value]);
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarim</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default CourseSearch;
