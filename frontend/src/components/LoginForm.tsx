import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { apiAuth } from "src/api/auth";

import { useNavigate } from "react-router-dom";
import { useSession } from "src/hooks/useSession";

import { FormInput } from "src/components/FormInput";
import { useState } from "react";
import { sleep } from "src/api/sleep";

const loginSchema = z.object({
  email: z.string().min(1, "Email address is required").email("Email Address is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

type LoginInput = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { session, setSession } = useSession();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const formMethods = useForm<z.Schema>({
    criteriaMode: "all",
    resolver: zodResolver(loginSchema),
  });
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = formMethods;

  async function login({ email, password }: LoginInput): Promise<void> {
    setLoading(true);
    try {
      await sleep(1000);
      const newSession = await apiAuth.login({ email, password });
      await setSession(newSession);
      navigate("/profile/");
    } catch (errors: any) {
      if (errors?.response?.status === 401) {
        setError("email", { name: "credentials" });
        setError("password", { name: "credentials", message: "No active account found with the given credentials" });
      } else {
        setError("general", { message: "An error occurred while logging in" });
      }
    } finally {
      setLoading(false);
    }
  }

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    console.log(values);
    login(values);
  };

  return (
    <FormProvider {...formMethods}>
      <form className="card-body" onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput label={"Email"} name={"email"} type="email" placeholder={"email"} autoComplete="username" required />
        <FormInput
          label={"Password"}
          name={"password"}
          type="password"
          placeholder={"password"}
          autoComplete="current-password"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        {errors?.root?.serverError.type === 400 && <p>server response message</p>}
        {errors?.root?.serverError.type === 401 && <p>Wrong credentials</p>}

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
