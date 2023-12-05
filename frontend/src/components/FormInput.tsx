import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: React.FC<FormInputProps> = ({ label, name, placeholder, type = "text", ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx("input input-bordered", errors[name] && "input-error")}
        {...props}
        {...register(name)}
      />
      {errors[name] && (
        <label className="labe">
          <span className="label-text-alt text-error">{errors[name]?.message as string}</span>
        </label>
      )}
    </div>
  );
};
