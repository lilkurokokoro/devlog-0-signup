import { type JSX } from "solid-js";

export function SubmitButton(props: JSX.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} type="submit" />;
}
