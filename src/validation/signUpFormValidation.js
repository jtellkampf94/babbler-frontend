const stepOneValidation = (step, name, username, email) => {
  if (
    (step === 1 && name.length === 0) ||
    username.length === 0 ||
    email.length === 0
  ) {
    return true;
  }
  return false;
};

const stepTwoValidation = (step, bio) => {
  if (step === 2 && bio.length > 160) {
    return true;
  }

  return false;
};

const stepFourValidation = (step, password, confirmPassword) => {
  if (
    (step === 4 && password.length === 0) ||
    (step === 4 && confirmPassword.length === 0)
  ) {
    return true;
  }
  return false;
};

const signUpFormValidation = state => {
  const { step, name, username, email, password, confirmPassword, bio } = state;

  return (
    stepOneValidation(step, name, username, email) ||
    stepTwoValidation(step, bio) ||
    stepFourValidation(step, password, confirmPassword)
  );
};

export default signUpFormValidation;
