// IMPORTS -
import { SkewLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <SkewLoader color={"black"} size={50}/>
    </div>
  );
};

export default Loader;
