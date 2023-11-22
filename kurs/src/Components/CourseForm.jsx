import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../store/slices/CourseSlice";
import { useEffect } from "react";

const initialState = {
  name: "",
  description: "",
  cost: 0,
};
const CourseForm = () => {
  const course = useSelector((state) => {
    return state.courses.updateData;
  });
 

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  //
  const handleChaneInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //
  useEffect(() => {
    if (course) {
      setState(course);
    }
  }, [course]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse(state));
    setState(initialState);
  };

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              value={state.name}
              name="name"
              onChange={(e) => {
                handleChaneInput(e);
              }}
              className="input is-expended"
            />
          </div>
          <div className="field">
            <label className="label">Aciklama</label>
            <textarea
              value={state.description}
              name="description"
              onChange={(e) => {
                handleChaneInput(e);
              }}
              className="input is-expended"
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              value={state.cost}
              name="cost"
              onChange={(e) => {
                handleChaneInput(e);
              }}
              type="number"
              className="input is-expended"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
