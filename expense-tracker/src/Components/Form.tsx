import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//define the shape of the form with the validation rules in one place
//(which we call schema)
// FormData: strictly what the form collects
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});
//like the interface that identifies the shape of the forms
export type formData = z.infer<typeof schema>;

interface Props {
  addDetail(data: FieldValues): void;
}

const Form = ({ addDetail }: Props) => {
  //array that will store all the values that come from data when we submit the forms
  //we set the useState that the array will be of type formData array that is the shape
  //of our form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset, //reset is used to reset a form (built in in the react hook form)
  } = useForm<formData>({ resolver: zodResolver(schema) });

  //Options of the form
  const options = ["Groceries", "Utilites", "Entertainment", ""];

  //OnSubmit
  //fieldvalues is too generic it means any object
  //but now data is expected to follow a certain shape and
  //we are adding to an array that is expecting this shape as well
  const onSubmit = (data: formData) => {
    addDetail(data);
    reset(); //call reset on successful submission
  };
  //   console.log(expenseDetails);
  return (
    //handleSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* description field */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      {/* Amount field */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      {/* category Field with a select element with options */}
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        {/* select of category */}
        <select
          {...register("category")}
          className="form-select"
          aria-label="Default select example"
          defaultValue=""
        >
          {/* in react we dont use selected on an option we put in the section 
            element we put the defaultValue='the same value given to the option field we 
            want to be the default value so since every option 
            has its value set the same as its name so the option with 
            value choose an option will be the defaultValue for the select' */}
          {options.map((option) => {
            return option === "" ? (
              <option disabled key={option} value="">
                {option}
              </option>
            ) : (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
