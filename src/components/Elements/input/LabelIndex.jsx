const Label = (props) => {
  const { children, htmlFor, classname = "mb-2" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-zinc-800 dark:text-white text-sm ${classname} font-medium `}
    >
      {children}
    </label>
  );
};

export default Label;
