import React, { useState } from 'react'

// write your custom hook here to control your checkout form


const useForm = (initialValues, cb) => {
    const [values, setValues] = useState( initialValues);
  
    const handleChanges = (e) => {
      console.log(e.target.name, e.target.value);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //alert(values);
      cb();
    };
  
    const clearForm = (e) => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return [values, handleSubmit, handleChanges, clearForm];
  };
  
  export default useForm;