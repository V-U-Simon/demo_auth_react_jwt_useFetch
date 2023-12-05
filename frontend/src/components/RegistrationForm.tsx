import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { apiAuth } from "src/api/auth";

import { useNavigate } from "react-router-dom";
import { useSession } from "src/hooks/useSession";

import { FormInput } from "src/components/FormInput";
import { useState } from "react";
import { sleep } from "src/api/sleep";

const registrationSchema = z
  .object({
    username: z.string(),
    email: z.string().min(1, "Email address is required").email("Email Address is invalid"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

type RegistrationInput = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
  const { setSession } = useSession();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const formMethods = useForm<z.Schema>({
    criteriaMode: "all",
    resolver: zodResolver(registrationSchema),
  });
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;

  async function registration({ username, email, password }: RegistrationInput): Promise<void> {
    setLoading(true);
    try {
      await sleep(1000);
      const newSession = await apiAuth.registration({ username, email, password });
      await setSession(newSession);
      navigate("/login/");
    } catch (errors: any) {
      setError("general", { message: "An error occurred while logging in" });
    } finally {
      setLoading(false);
    }
  }

  const onSubmitHandler: SubmitHandler<RegistrationInput> = (values) => {
    console.log(values);
    registration(values);
  };

  return (
    <FormProvider {...formMethods}>
      <form className="card-body" onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput label={"Username"} name={"username"} type="string" placeholder={"Username"} />
        <FormInput label={"Email"} name={"email"} type="email" placeholder={"email"} autoComplete="username" required />
        <FormInput
          label={"Password"}
          name={"password"}
          type="password"
          placeholder={"password"}
          autoComplete="current-password"
          required
        />
        <FormInput
          label={"Confirm Password"}
          name={"passwordConfirm"}
          type="password"
          placeholder={"password"}
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Already have account? Login.
          </a>
        </label>
        {errors?.root?.serverError.type === 400 && <p>server response message</p>}

        <div className="form-control mt-6">
          <button className="btn btn-primary">
            {loading && <span className="loading loading-spinner">123</span>}
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
