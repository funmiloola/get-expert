import InputField from "./inputField"
import SignupHeader from "./SignupHeader"
export default function Signup() {
    return (
        <>
            <SignupHeader />
            <div className="flex flex-col items-center gap-2 pt-12">
                <h2>Login to your account.</h2>
                <h3>Welcome back!Please enter your details.</h3>
            <div className="flex flex-col ">
            <InputField label="Email" placeholder="Enter your mail" />
                <InputField label="Password" placeholder="••••••••" />
                </div>
                </div>
        </>
    )
}