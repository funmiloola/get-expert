import InputField from "../components/inputField";
import logo from "../assets/Icons/Frame.svg";
import { useForm } from "react-hook-form";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
export default function Signin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    getValues,
  } = useForm();

  const login = async () => {
    const email = getValues("email");
    const password = getValues("password");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return { success: false, errorMessage: error.code };
    }
  };
  const errorMsg = async () => {
    const response = await login();
    try {
      const message = response.errorMessage.replaceAll("_", " ");
      if (message === "auth/invalid-email"|| message === "auth/invalid-login-credentials") {
        return "Invalid Login Credentials ";
      } else if (message === "auth/network-request-failed") {
        return "Network Failed Try again!";
      } else {
        return "Error";
      }
    } catch (error) {
      throw error;
    }
  };
  const onSubmit = async () => {
    try {
      const response = await login();
      if (response?.success) {
        navigate("/home");
      } else {
        const message = await errorMsg();
        toast.error(message);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <div className="font-sans flex flex-col items-center gap-4 pt-24 px-8 lg:px-0">
        <img src={logo} alt="" />
        <h2 className="text-xl md:text-3xl font-semibold">
          Login to your account.
        </h2>
        <h3 className="text-base text-gray-700 ">
          Welcome back!Please enter your details.
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full lg:w-[25%] gap-3 "
        >
          <div>
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your mail"
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Enter a valid mail";
                  }
                  return true;
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
                required: "Password is required",
              })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>

          <p className="cursor-pointer text-[#1E55AF] text-center text-base font-semibold">
            Forgout Password?
          </p>
          <button
            type="submit"
                      className="w-full lg:w-full flex justify-center items-center gap-2 py-2 bg-[#1E55AF] border border-[#1E55AF] text-white font-semibold rounded-md cursor-pointer disabled:bg-gray-300 disabled:border-gray-300"
                      disabled={isSubmitting}
          >
                      <span>Login</span>
                        {isSubmitting ? (<svg
      className="mr-3 -ml-1 size-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>):null}  
          </button>
        </form>
        <p className="text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="cursor-pointer text-[#1E55AF] font-semibold">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}
