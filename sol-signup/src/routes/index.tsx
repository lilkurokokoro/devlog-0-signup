import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="max-w-[800px] mx-auto p-4 mt-16">
      <h1 class="bold text-2xl mb-4">DEVLOG 0 SAMPLE SIGNUP FORM</h1>
      <p><b>Task:</b> create sample signup form using this Figma file:&nbsp;
        <a href="https://www.figma.com/file/7CvCi6oBU5QfBZcQbnVhXV/DEVLOG-0.-Sample-Sign-in-Form?type=design&node-id=0%3A1&mode=design&t=wdKYO76Ye15sLq8q-1" target="_blank">CLICK</a>
      </p>
      <p><b>Stack:</b></p>
        <ul>
          <li>
            <a href="https://github.com/solidjs/solid-start">SolidStart</a>
          </li>
          <li>
            <a href="https://github.com/tailwindlabs/tailwindcss">TailwindCSS</a>
          </li>
        </ul>
      <A  href="/signup" class="text-sky-600 hover:underline">Sign Up</A>
    </main>
  );
}
