import { LoginForm } from "src/components/LoginForm";

export function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

// <div>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
//       <span className="error">{errors.email}</span>
//     </div>
//     <div>
//       <label htmlFor="password">Пароль:</label>
//       <input type="password" id="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
//       <span className="error">{errors.password}</span>
//     </div>
//     <div>
//       <button type="submit">Войти</button>
//     </div>
//     {errors.message && <p className="error">{errors.message}</p>}
//   </form>
//   {isAuthenticated() && <Navigate to="/" replace={true} />}
// </div>
