import Loader from "@/components/common/Loader";
import Spinner from "@/components/common/Spinner";

const loading = () => {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}>
    //   <Spinner />
    // </div>
    <Loader />
  );
};

export default loading;
