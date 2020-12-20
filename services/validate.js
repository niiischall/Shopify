const validation = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 4) {
      errors.name = "Minimun length of 4";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length < 10) {
      errors.phone = "Minimun length of 10";
    }

    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length < 10) {
      errors.address = "Minimun length of 10";
    } 

    if (!values.pin) {
      errors.pin = "Required";
    } else if (values.pin.length < 6) {
      errors.pin = "Minimun length of 6";
    } 

    if(!values.city) {
        errors.city = "Required";
    }

    return errors;
}

export default validation;