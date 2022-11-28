import { useState, useRef } from "react";
import EnquirySubmit from "./EnquirySubmit";

export default function EnquiryForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contactnumber: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const inputFileRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(inputFileRef?.current?.files);
    setIsFormVisible(false);
  };

  return (
    <>
      <div>
        {isFormVisible ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input
                name="name"
                value={formValues?.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email Address: </label>
              <input
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Contact Number: </label>
              <input
                name="contactnumber"
                value={formValues.contactnumber}
                onChange={handleChange}
              />
            </div>

            <button type="submit">
              Send Enquiry
            </button>
          </form>
        ) : (
          <EnquirySubmit data={formValues} />
        )}
      </div>
    </>
  );
}
