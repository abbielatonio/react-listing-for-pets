import { useEffect, useState } from "react";
import React from "react";
import key from "../../Api";
import { Link, useParams } from "react-router-dom";

function PetDetails() {
  const { id } = useParams(); /*ohmygod ito lang pala nakalimutan ko huhu*/
  const [load, setLoad] = useState(true);
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pic, setPic] = useState("");
  const [tags, setTags] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  useEffect(async () => {
    const { animal } = await key.animal.show(id).then((data) => data.data);
    setName(animal.name);
    setAnimal(animal.type);
    setBreed(animal.breeds.primary);
    setPic(animal.photos);
    setTags(animal.tags.join(", "));
    setAge(animal.age);
    setGender(animal.gender);
    setSize(animal.size);
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
      <div>
        <div className="detailwrapper">
          <h1>My name is {name}</h1>
        </div>

        <div className="detailwrapper">
          <div>
            <img src={dogpic} alt="" />
          </div>

          <div></div>

          <div>
            <h3>About Me:</h3>
            <p>Known to be: {tags}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            <p>Gender: {gender}</p>
            <p>Size: {size}</p>
          </div>
        </div>

        <div className="detailwrapper">
          <Link reloadDocument to={`/`} className="home">
            {" "}
            <button>Back to Home</button>
          </Link>

          <Link reloadDocument to={`/enquiry/${id}`} className="enquire">
            {" "}
            <button> {`Enquire about ${name}`}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default PetDetails;
