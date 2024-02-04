import { createForm, email, minLength, required } from "@modular-forms/solid";

// TODO: add textarea
type SignUpForm = {
  email: string;
  password: string;
};

export default function Signup() {
  const [signupForm, { Form, Field, FieldArray }] = createForm<SignUpForm>();

  return (
    <main>
      <Form
        onSubmit={() => {
          console.log("do nothing");
        }}
      >
        <Field
          name="email"
          validate={[
            required("Please enter your email."),
            email("The email address is badly formatted."),
          ]}
        >
          {(field, props) => <input {...props} type="email" />}
        </Field>
        <Field
          name="password"
          validate={[
            required("Please enter your password."),
            minLength(8, "You password must have 8 characters or more."),
          ]}
        >
          {(field, props) => (
            <>
              <input {...props} type="password" required />
              {field.error && <div>{field.error}</div>}
            </>
          )}
        </Field>
        <button type="submit">Sign Up</button>
      </Form>
    </main>
  );
}
