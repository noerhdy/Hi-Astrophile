import React from "react";

const Input = (props) => {
  const { type, placeholder, name, autoComplete, accept, onChange } = props;
  return (
    <input
      type={type}
      className="text-sm w-full rounded py-2 px-3 drop-shadow-sm text-zinc-950  bg-[#dcdcdc]"
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      accept={accept}
      onChange={onChange}
      spellCheck="false"
    />
  );
};

export default Input;
