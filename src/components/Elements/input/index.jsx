import Input from "./InputIndex";
import Label from "./LabelIndex";

const InputForm = (props) => {
  const { label, name, type, placeholder, autoComplete, accept, onChange } =
    props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        autocomplete="off"
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        accept={accept}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
