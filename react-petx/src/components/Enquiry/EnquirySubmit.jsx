import React from "react";

const EnquirySubmit = ({ data }) => {
  return (
    <div>
      <h1>Thank you {data?.name} for sending an enquiry.</h1>
      <h3>
        We will try to reach you through the contact information
        your provided below.
      </h3>
      <p>Email Address: {data?.email}</p>
      <p>Contact Number: {data?.contactnumber}</p>
    </div>
  );
};

export default EnquirySubmit;
