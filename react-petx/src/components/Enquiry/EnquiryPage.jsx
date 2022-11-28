import { useEffect, useState } from "react";
import React from "react";
import pf from "../../Api.js";
import { useParams } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";

function EnquiryPage() {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");

  useEffect(async () => {
    const { animal } = await pf.animal.show(id).then((data) => data.data);
    setName(animal.name);
    setPic(animal.photos);
    setLoad(false);
  }, [id]);

  if (load) {
    return (
      <div className="detailwrapper">
        <h1>Loading....</h1>
      </div>
    );
  }

  let dogpic = "https://iili.io/Q4WXOF.png";

  if (pic.length !== 0) {
    dogpic = pic[0].large;
  }

  return (
    <div>
      <div className="detailwrapper">
        <h3>
          If you are enquiring about {name}, please complete the form below.
        </h3>
      </div>
      <div>
        <div className="detailwrapper">
          <div>
            {" "}
            <img src={dogpic} alt="" />
          </div>

          <div>
            {" "}
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryPage;
