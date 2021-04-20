import { useState } from "react";
import styled, { css } from "styled-components";
import { StyledButton } from "./About";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
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
        <ContactInput
          required
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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

  :nth-child(4) {
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
  font-size: 1.8rem;
`;
