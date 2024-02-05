import { createForm, email, minLength, required } from "@modular-forms/solid";
import { TextInput } from "~/components/TextInput";

// TODO: add textarea
type SignUpForm = {
  email: string;
  password: string;
};

export default function Signup() {
  const [signupForm, { Form, Field, FieldArray }] = createForm<SignUpForm>();

  return (
    <main>
      <div class="space-y-8 md:space-y-10 lg:space-y-12">
        <Field
          name="email"
          validate={[
            required("Please enter your email."),
            email("The email address is badly formatted."),
          ]}
        >
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="email"
              label="Email"
              placeholder="example@email.com"
              required
            />
          )}
        </Field>
        <Field
          name="password"
          validate={[
            required("Please enter your password."),
            minLength(8, "You password must have 8 characters or more."),
          ]}
        >
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="password"
              label="Password"
              placeholder="********"
              required
            />
          )}
        </Field>
      </div>
    </main>
  );
}
