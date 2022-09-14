import React, { useState } from "react";
import { RadioButton } from "../RadioButtton/RadioButton";
import "./Form.css";
import axios from "axios";

function Form(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [requireMent, setRequireMent] = useState(props.requireMent);

  const radioChangeHandler = (e) => {
    setRequireMent(e.target.value);
  };
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setRequireMent("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, requireMent });
    try {
      const config ={
        headers:{
          "Content-type":"application/json",
        },
      };

      const {data} = await axios.post(
        "/data", 
        {
          firstName, lastName, email, phoneNumber, requireMent 
        },
        config
        
      )

    } catch (error) {
      console.log(error);
      
    }
    
      resetForm();
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        PhoneNumber
        <input
          type="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <br />
      <div className="radio">
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={requireMent === "Design"}
          label="Design"
          value="Design"
        />
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={requireMent === "Website"}
          label="Website"
          value="Website"
        />
      </div>
      <div className="radio">
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={requireMent === "Social Media Promotion"}
          label="Social Media Promotion"
          value="Social Media Promotion"
        />
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={requireMent === "Digital Marketing"}
          label="Digital Marketing"
          value="Digital Marketing"
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
