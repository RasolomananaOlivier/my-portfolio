const handleGetInTouch = () => {
  const email = "herimanitraolivier@gmail.com";
  const subject = "Let's Talk";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}`;
};

export { handleGetInTouch };
