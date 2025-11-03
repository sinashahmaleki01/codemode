//--------------------|📝 : Button

function Button({ children }) {
  return (
    <a href="#about" className="btn">
      <p>{children}</p>
    </a>
  );
}

export default Button;
