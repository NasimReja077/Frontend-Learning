import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const icecrem = [
  { value: "", label: "" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const HookForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setError,
  } = useForm({
    defaultValues: {
      fname: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      terms: false,
      icecrem: [],
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("data", data);
      throw new Error("Server failed!");
    } catch (error) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: "server Error",
      });
    }
    console.log("Form Data:", data);
  };
  console.log("error", errors);
  return (
    <div>
      <h2>React Hook Form (JavaScript Version)</h2>
      {errors.root && <p className="error">{errors.root.message}</p>}
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input
            {...register("fname", {
              required: "Enter valid first name",
              maxLength: {
                value: 20,
                message: "First name must be less than 20 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "First name must be alphabetic",
              },
              validate: (value) =>
                value.length < 2
                  ? "First name must be more than 2 characters"
                  : true,
            })}
            type="text"
            placeholder="enter first name"
          />
          {errors.fname && <p className="error">{errors.fname.message}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email must be more than 5 characters",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is not valid",
              },
            })}
            type="email"
            placeholder="enter email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password cannot be empty",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long",
              },
              maxLength: {
                value: 10,
                message: "Password must not be more than 10 characters long",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Password must be alphanumeric",
              },
            })}
            type="password"
            placeholder="enter password"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select
            {...register("gender", {
              required: "Select any one Option",
              validate: (value) =>
                ["female", "male", "other"].includes(value)
                  ? true
                  : "Invalid Selection",
            })}
          >
            <option value="">Select one</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Age must be more than 18",
              },
            })}
            type="number"
            placeholder="enter age"
          />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        {/* Terms */}
        <div className="form-group">
          <input
            {...register("terms", {
              required: "Please accept terms and conditions",
            })}
            type="checkbox"
          />
          <label>Terms and conditions</label>
          {errors.terms && <p className="error">{errors.terms.message}</p>}
        </div>
        <div className="form-group">
          <label>Choose Ice Cream</label>
          <Controller
            name="icecrem"
            control={control}
            // defaultValue={null}
            rules={{
              validate: (value) =>
                value && value.length > 0 ? true : "Select at least one option",
            }}
            render={({ field }) => (
              <Select
                {...field}
                options={icecrem}
                isMulti
                onChange={(select) => field.onChange(select)}
              />
            )}
          />
          {errors.icecrem && <p className="error">{errors.icecrem.message}</p>}
        </div>

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "LOADING...." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};
