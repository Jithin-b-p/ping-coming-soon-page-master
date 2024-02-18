import { useForm } from "react-hook-form";
import Button from "./Button";
import { toast } from "react-toastify";

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  console.log(errors);

  function onSubmit() {
    console.log(errors);
    reset();
    toast.success("Thanks for subscribing!", {
      toastId: "success",
      role: "status",
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`relative mb-20 max-md:mb-10 flex sm:gap-4 flex-wrap max-md:px-5 ${
        errors.email ? "gap-10" : "gap-3"
      }`}
    >
      <label className="sr-only" htmlFor="email">
        Enter your email address
      </label>
      <input
        id="email"
        className={`py-2 px-8 md:py-3 md:px-6 max-md:text-xs border-2 rounded-3xl flex-auto ${
          errors.email ? "!border-secondary-red !outline-secondary-red" : ""
        }`}
        type="text"
        placeholder="Your email address.."
        {...register("email", {
          required: "Please enter an email address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        })}
      />
      <Button />
      {errors.email ? (
        <span
          className="absolute max-[509px]:bottom-14 min-[509px]:-bottom-8 left-10 text-xs italic text-secondary-red"
          role="region"
          aria-live="assertive"
        >
          {errors.email.message}
        </span>
      ) : (
        ""
      )}
    </form>
  );
}

export default Form;
