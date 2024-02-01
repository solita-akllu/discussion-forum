import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  labelFor?: string;
  customStyle?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export const InputField = (props: InputProps) => {
  const { label, labelFor, customStyle, ...rest } = props;

  return (
    <div>
      {label && (
        <label
          htmlFor={labelFor}
          className="block text-sm font-medium leading-6"
        >
          {label}
        </label>
      )}
      <input
        className={`${customStyle} block w-full rounded-md border-0 bg-white p-1.5 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500`}
        {...rest}
      />
    </div>
  );
};
