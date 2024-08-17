const Label = (props) => {
  const { children, htmlFor, classname = "mb-2" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-zinc-950  text-sm ${classname} font-semibold `}
    >
      {children}
    </label>
  );
};

export default Label;
