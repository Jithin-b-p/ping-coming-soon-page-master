import { ToastContainer as ToastifyContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = () => {
  return (
    <div role="status" aria-live="polite" aria-atomic="true">
      <ToastifyContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default ToastContainer;
