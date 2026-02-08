import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username cant be empty';
  }
  if (!values.remarks) {
    errors.remarks = 'Remarks cant be empty';
  }

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};

export default function Comment({ addNewComment }) {

  // let [formData, setFormData] = useState({
  //     username:"",
  //     remarks:"",
  //     rating:5
  // })

  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      addNewComment(values);
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // }

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   addNewComment(formData);
  //   setFormData({
  //     username:"",
  //     remarks:"",
  //     rating:5
  //   })
  //   // console.log(formData);
  // }

  return (
    <>
      <div>
        <h3>Give a Comment!</h3>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="username"
            name="username"
          />
            
          {formik.touched.username && formik.errors.username && (
            <div style={{ color: "red" }}>
              {formik.errors.username}
            </div>
          )}

          <br /><br />

          <label htmlFor="remarks">Remarks :</label>
          <textarea
            value={formik.values.remarks}
            placeholder="Leave a remark"
            onChange={formik.handleChange}
            id="remarks"
            name="remarks"
          />
        {formik.errors.remarks ? <p style={{color:"red"}}>{formik.errors.remarks}</p> : null}
 
          <br /><br />

          <label htmlFor="rating">Rating :</label>
          <input
            placeholder="rating"
            type="number"
            min={1}
            max={5}
            value={formik.values.rating}
            onChange={formik.handleChange}
            id="rating"
            name="rating"
          />

          <br /><br />

          <button>Add Comment</button>
        </form>
      </div>
    </>
  );
}
