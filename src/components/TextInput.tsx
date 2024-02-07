import clsx from "clsx";
import { createMemo, JSX, splitProps } from "solid-js";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

type TextInputProps = {
  ref: (element: HTMLInputElement) => void;
  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;
  value: string | number | undefined;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
  padding?: "none";
};

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export function TextInput(props: TextInputProps) {
  // Split input element props
  const [, inputProps] = splitProps(props, [
    "class",
    "value",
    "label",
    "error",
    "padding",
  ]);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) =>
      props.value === undefined
        ? ""
        : !Number.isNaN(props.value)
        ? props.value
        : prevValue,
    ""
  );

  return (
    <div class={clsx(!props.padding && "px-8 lg:px-10", props.class)}>
      <InputLabel
        name={props.name}
        label={props.label}
        required={props.required}
      />
      <input
        {...inputProps}
        class={clsx(
          "h-14 w-full rounded-2xl border-2 bg-neutral-800 px-5 outline-none placeholder:text-neutral-400 md:h-16 md:text-lg lg:h-[70px] lg:px-6 lg:text-xl",
          props.error
            ? "border-red-600/50"
            : "border-neutral-600 hover:border-neutral-400 focus:border-orange-300"
        )}
        id={props.name}
        value={getValue()}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      <InputError name={props.name} error={props.error} />
    </div>
  );
}
