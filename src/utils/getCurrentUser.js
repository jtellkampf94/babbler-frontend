const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("babblerToken");
    return token;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
