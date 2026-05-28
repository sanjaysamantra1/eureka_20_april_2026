import { useState } from "react";

export default function FormDemo1() {
  const defaultUserData = {
    firstName: "Sanjay",
    lastName: "samantr",
    email: "",
    salary: "",
    phone: "",
    remark:""
  };

  const defaultErrors = {
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    phone: "",
    remark:""
  };

  const [user, setUser] = useState(defaultUserData);
  const [errors, setErrors] = useState(defaultErrors);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setUser({ ...user, [fieldName]: fieldValue });

    setErrors({
      ...errors,
      [fieldName]:fieldValue.trim() === "" ? `${fieldName} is required`: "",
    });
  };

  const submitMyForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", user);
  };

  const resetMyForm = () => {
    setUser(defaultUserData);
    setErrors(defaultErrors);
  };

  return (
    <>
      <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
        <h3>Form</h3>

        <form onSubmit={submitMyForm} onReset={resetMyForm}>
          <p>
            FirstName: <input name="firstName" value={user.firstName} onChange={changeHandler} />
            <span className="text-danger">{errors.firstName}</span>
          </p>

          <p>
            LastName: <input name="lastName" value={user.lastName} onChange={changeHandler} />
            <span className="text-danger">{errors.lastName}</span>
          </p>

          <p>
            Email: <input name="email" type="email" value={user.email} onChange={changeHandler} />
            <span className="text-danger">{errors.email}</span>
          </p>

          <p>
            Salary: <input name="salary" value={user.salary} onChange={changeHandler} />
            <span className="text-danger">{errors.salary}</span>
          </p>

          <p>
            Phone: <input name="phone" value={user.phone} onChange={changeHandler} />
            <span className="text-danger">{errors.phone}</span>
          </p>

          <p>
            Remark: <textarea name="remark" value={user.remark} onChange={changeHandler}></textarea>
            <span className="text-danger">{errors.remark}</span>
          </p>

          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </>
  );
}