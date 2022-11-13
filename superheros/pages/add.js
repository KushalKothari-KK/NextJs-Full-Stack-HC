import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios, * as others from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";

// TODO:To check if form is not empty

const addNewHero = () => {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //any value come goes to appropriate superHero and realName
    });
  };
  const handleForm = async (event) => {
    event.preventDefault;
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Add a new hero identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          onChange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="RealName"
          type="text"
          name="realName"
        />
        <MDBBtn type="submit">Add new Hero</MDBBtn>
      </form>
    </div>
  );
};

export default addNewHero;
