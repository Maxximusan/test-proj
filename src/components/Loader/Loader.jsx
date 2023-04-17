import { Hearts } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Hearts
      height="150"
      width="150"
      color="#4fa94d"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
