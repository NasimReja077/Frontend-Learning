import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Ice cream options
const icecrem = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Zod schema for Select options
const icecremOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

// MAIN ZOD SCHEMA
const formSchema = z.object({
  fname: z
    .string()
    .min(2, "First name must be more than 2 characters")
    .max(20, "First name must be less than 20 characters"),

  email: z.string().email("Email is not valid"),

  password: z
    .string()
    .min(4, "Password must be at least 4 characters long")
    .regex(/^[A-Za-z0-9]+$/, "Password must be alphanumeric"),

  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Select any one option" }),
  }),

  age: z.coerce.number().min(18, "Age must be more than 18"),

  terms: z.boolean().refine((v) => v === true, {
    message: "Please accept terms and conditions",
  }),

  icecrem: z.array(icecremOptionSchema).min(1, "Select any one option"),
});

export const HookForm1Zod = () => {
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
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("data", data);

      // Fake server issue
      throw new Error("Server failed!");
    } catch (error) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: "Server Error",
      });
    }
  };

  console.log("error log:", errors);

  return (
    <div className="form-container">
  <h2 className="form-title">React Hook Form + Zod (JavaScript Version)</h2>

      {errors.root && <p className="error">{errors.root.message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input {...register("fname")} type="text" placeholder="enter first name" />
          {errors.fname && <p className="error">{errors.fname.message}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} type="email" placeholder="enter email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input {...register("password")} type="password" placeholder="enter password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select {...register("gender")}>
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
          <input {...register("age")} type="number" placeholder="enter age" />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        {/* Terms */}
        <div className="form-group">
          <input {...register("terms")} type="checkbox" />
          <label>Terms and conditions</label>
          {errors.terms && <p className="error">{errors.terms.message}</p>}
        </div>

        {/* Ice Cream */}
        <div className="form-group">
          <label>Select Ice Cream</label>
          <Controller
            name="icecrem"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={icecrem}
                isMulti
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
          {errors.icecrem && <p className="error">{errors.icecrem.message}</p>}
        </div>

        <button className="btn-submit" disabled={isSubmitting} type="submit">
          {isSubmitting ? "LOADING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};
