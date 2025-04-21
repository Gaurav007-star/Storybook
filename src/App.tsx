import CallToast from "./components/Feedback/CallToast";
import TextInput from "./components/TextInput/TextInput";
import Typography from "./components/Typography/Typography";
// import { FcApprove } from "react-icons/fc";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 ">
      <Typography
        typoTag="p"
        fontSize="52px"
        fontWeight="800"
        label="Login"
        mode="dark"
      />

      <TextInput
        disable={false}
        type="email"
        label="email"
        placeholder="enter email"
        state="default"
      />

<TextInput
        disable={false}
        type="password"
        label="password"
        placeholder="enter password"
        state="default"
      />

      <CallToast label="submit" buttonColor="#bc2626"/>
    </div>
  );
};

export default App;
