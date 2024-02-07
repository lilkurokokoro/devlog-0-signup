import { JSX, ParentComponent, ParentProps } from "solid-js";

const Form: ParentComponent = ({ children }) => {
  return (
    <div>
      Form
      {children}
    </div>
  );
};

export default Form;
