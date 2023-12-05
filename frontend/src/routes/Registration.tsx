import { RegistrationForm } from "src/components/RegistrationForm";

export function Registration() {
  return (
    <div className="hero min-h-screen bg-base-200 mx-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-5xl font-bold">Registration!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
