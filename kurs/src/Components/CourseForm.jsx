import React from "react";

const CourseForm = () => {
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input className="input is-expended" />
          </div>
          <div className="field">
            <label className="label">Aciklama</label>
            <textarea className="input is-expended" />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input type="number" className="input is-expended" />
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
