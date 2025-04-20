import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const phonesData = useLoaderData();
  const [phones, setPhones] = useState(phonesData);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") {
      return setPhones(phonesData);
    }
    const searchedPhones = phonesData.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text) ||
        phone.brand.toLowerCase().split(" ").includes(text)
    );
    setPhones(searchedPhones);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhonesContainer phonesData={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
