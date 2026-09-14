import { useState } from "react";
import { useForm } from "react-hook-form";

function Auth() {
  const [authMode, setAuthMode] = useState("signin");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  console.log(authMode);
  return (
    <div className="col-md-6 my-5 mx-auto">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                  maxLength: { value: 20, message: "Password must be at most 20 characters" },
                })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {authMode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-3">
            {authMode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0 bg-transparent border-0 alignment-baseline"
                  onClick={() => setAuthMode("signup")}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0 bg-transparent border-0 alignment-baseline"
                  onClick={() => setAuthMode("signin")}
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
