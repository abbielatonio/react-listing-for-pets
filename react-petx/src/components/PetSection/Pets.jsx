import React, { useState, useEffect, useRef } from "react";
import pf from "../../Api.js";
import Loader from "../../assets/Loader";
import PetItems from "./PetItems";

function Pets() {
  const [load, setLoad] = useState(true);
  const [petsNow, setPetsNow] = useState(1);
  const [allPets, setAllPets] = useState(null);
  const [pets, updatePets] = useState([]);
  const pageRef = useRef(allPets);
  const loadRef = useRef(load);
  const petsNowRef = useRef(petsNow);

  useEffect(() => {
    getPets();
    window.addEventListener("scroll", handleScroll);
  }, []);

  function updateAllPets(data) {
    pageRef.current = data;
    setAllPets(data);
  }

  function updateLoad(data) {
    loadRef.current = data;
    setLoad(data);
  }

  function updatePetsNow(data) {
    petsNowRef.current = data;
    setPetsNow(data);
  }


  function getPets() {
    let dogsonly = {  type: "dog", page: petsNowRef.current };
    pf.animal.search(dogsonly).then((response) => {
      let petsData = response.data;
      updatePets((pets) => [...pets, petsData.animals].flat());
      updateAllPets(petsData.pagination.total_pages);
      updateLoad(false);
    });
  }


  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !loadRef.current &&
      !(petsNowRef.current >= pageRef.current)
    ) {
      updateLoad(true);
      let nextPage = petsNowRef.current + 1;
      updatePetsNow(nextPage);
      getPets();
    }
  }

  let loader;
  if (!pets.length || load) {
    loader = <Loader />
    ;
  }

  return (
    <>
      <div className="app-container">
        <div className="pet-container">
          <div className="all-container">
            {pets.length > 0 &&
              pets.map((animal, i) => {
                return <PetItems cindex={i} animal={animal} key={animal.id} />;
              })}
            {loader}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pets;
