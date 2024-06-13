import React from "react";

const Input = (props) => {
  const { type, placeholder, name, autoComplete, accept, onChange } = props;
  return (
    <input
      type={type}
      className="text-sm w-full rounded py-2 px-3 drop-shadow-sm text-slate-700 dark:text-white dark dark:bg-zinc-900"
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      accept={accept}
      onChange={onChange}
    />
  );
};

export default Input;
