import React from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../components/PageHero2";
import Footer from "../../../components/Footer";
import F1SecondaryNavigation from "../F1SecondaryNavigation";
import { useForm } from 'react-hook-form';

function F1Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <>
      <PageHero2
        mainHeading="Register Now"
        subHeading="To start racing with 10 Controls"
      />
      <F1SecondaryNavigation
      />

      <S.Section>

        <F1FormHeadings>
        <h3>Step 1. Fill out the form</h3>
        <h4>TO SIGN UP FOR F1 LEAGUE RACING</h4>
        </F1FormHeadings>

        <F1FormContainer>
          <input type="text" placeholder="Player ID" required />
          <select name="platform" id="platform" required>
            <option value="" disabled selected hidden>
              PLATFORM
            </option>
          </select>
          <input type="text" placeholder="Discord tag" required />
          <select name="nationality" id="nationality"><option value="" disabled selected hidden>
              NATIONALITY
            </option></select>
          <button type="submit">Submit</button>
        </F1FormContainer>

      </S.Section>

      <Footer />
    </>
  );
}

export default F1Register;

const F1FormHeadings = styled.form`
  text-align: center;
`;

const F1FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.333%;
  margin-left: auto;
  margin-right: auto;
  row-gap: 16px;
  margin-top: 30px;

  > button {
    margin-top: 16px;
  }
`;
