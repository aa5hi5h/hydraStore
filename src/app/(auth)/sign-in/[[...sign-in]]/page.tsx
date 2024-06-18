import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-8">
      <SignIn />
    </div>
  );
}