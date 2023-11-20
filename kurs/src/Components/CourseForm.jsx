import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../store/slices/CourseSlice";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/FormSlice";
const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              value={name}
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              className="input is-expended"
            />
          </div>
          <div className="field">
            <label className="label">Aciklama</label>
            <textarea
              value={description}
              onChange={(e) => {
                dispatch(changeDescription(e.target.value));
              }}
              className="input is-expended"
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              value={cost}
              onChange={(e) => {
                dispatch(changeCost(parseInt(e.target.value)));
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
