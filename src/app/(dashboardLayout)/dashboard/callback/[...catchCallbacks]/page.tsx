import { redirect } from "next/navigation";

export default function RedirectPage() {
  // Redirect to /target-page/ immediately
  redirect("/dashboard");

  // This code will never be reached
  return (
    <div>
      <h1>Redirect Page</h1>
    </div>
  );
}
