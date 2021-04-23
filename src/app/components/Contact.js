import { useState } from "react";
import styled, { css } from "styled-components";
import emailJs from "emailjs-com";

import { StyledButton } from "./About";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsButtonActive(true);
    try {
      await emailJs.send(
        "service_6rv44ph",
        "template_cf1pzn9",
        {
          from_name: name,
          to_name: "Mohd Sameer Ahmad",
          message: message,
          reply_to: email,
        },
        "user_jxvX5ugeLxFWPSMTvCIYp"
      );

      alert("Your message was sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Something went wrong!\nTry sending the mail again");
    }
    setIsButtonActive(false);
  };

  return (
    <ContactContainer id="contact">
      <ContactHeader> Get in touch With Me</ContactHeader>
      <FormContainer method="POST" action="">
        <ContactInput
          required
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ContactInput
          required
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactTextArea
          required
          placeholder="Message"
          rows="6"
          cols="40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <StyledButton
          style={{ width: "217px" }}
          type="submit"
          onClick={formSubmitHandler}
          disabled={isButtonActive}
        >
          Get in Touch
        </StyledButton>
      </FormContainer>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  background-color: #152636;

  @media only screen and (max-width: 370px) {
    padding: 70px 10px;
  }
`;

const ContactHeader = styled.h1`
  color: #fff;
`;

const FormContainer = styled.form`
  display: flex;
  margin-top: 40px;
  width: 700px;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledInput = css`
  color: #fff;
  outline-width: 0;
  border: none;
  background-color: #152636;
  border-bottom: 3px solid #fff;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.3rem;
  width: 40%;

  :nth-child(3) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactInput = styled.input`
  ${StyledInput}
`;

const ContactTextArea = styled.textarea`
  ${StyledInput}
  font-size: 1.3rem;
`;
