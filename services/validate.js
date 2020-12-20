export const profileValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid e-mail address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Minimun password length of 8";
  }

  return errors;
}


export const checkoutValidation = (values) => {
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
