import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
