import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;
