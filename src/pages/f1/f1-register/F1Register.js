import React, { useState } from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../components/PageHero2";
import Footer from "../../../components/Footer";
import F1SecondaryNavigation from "../F1SecondaryNavigation";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

function F1Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nationalities = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DR Congo",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Faeroe Islands",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Réunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "State of Palestine",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "The Bahamas",
    "Timor-Leste",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [playerID, setPlayerID] = useState("");
  const [platform, setPlatform] = useState("");
  const [discordTag, setDiscordTag] = useState("");
  const [nationality, setNationality] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendSubmission = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "f1-entry"), {
      playerID,
      platform,
      discord_tag: discordTag,
      nationality,
    });

    setPlayerID("");
    setPlatform("");
    setDiscordTag("");
    setNationality("");

    setShowConfirmation(true);
  };

  return (
    <>
      <PageHero2
        mainHeading="Register Now"
        subHeading="To start racing with 10 Controls"
      />
      <F1SecondaryNavigation />

      <S.Section>
        

        <F1FormContainer onSubmit={sendSubmission}>
        <F1FormHeadings>
          <h4>Step 1.</h4>
          <h3>Fill out the form</h3>
          <h5>TO SIGN UP FOR F1 LEAGUE RACING</h5>
        </F1FormHeadings>
          {showConfirmation === false ? (
            <>
              <input
                value={playerID}
                onChange={(e) => setPlayerID(e.target.value)}
                type="text"
                placeholder="Player ID"
                required
              />
              <img className="form-image" alt="" src="/f1-game-name.jpg"/>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                name="platform"
                id="platform"
                required
              >
                <option value="" disabled selected>
                  SELECT PLATFORM
                </option>
                <option value="Steam">STEAM</option>
                <option value="Origin">ORIGIN</option>
                <option value="Xbox">XBOX</option>
                <option value="PlayStation">PLAYSTATION</option>
              </select>
              <input
                value={discordTag}
                onChange={(e) => setDiscordTag(e.target.value)}
                type="text"
                placeholder="Discord tag"
                required
              />
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                name="nationality"
                id="nationality"
              >
                <option value="" disabled selected>
                  SELECT NATIONALITY
                </option>
                {nationalities.map((nationality) => (
                  <option value={nationality}>{nationality}</option>
                ))}
              </select>
              <button type="submit">Submit</button>
            </>
          ) : (
            <p>
              Thank you for registering.<br></br>
              <br></br>Make sure you join our{" "}
              <a
                href="https://discord.gg/10controls"
                target="_blank"
                rel="noreferrer"
              >
                discord server
              </a>{" "}
              to complete your registration.
            </p>
          )}
        </F1FormContainer>
        </S.Section>

          <S.Section>
        <F1FormContainer>
          <F1FormHeadings>
          <h4>Step 2.</h4>
          <h3>Join our discord server</h3>
          <h5>To confirm your registration and be eligible for racing</h5>
          </F1FormHeadings>
          <DiscordServerContainer>
          <a
                href="https://discord.gg/10controls"
                target="_blank"
                rel="noreferrer"
              >
            <svg
                width="100%"
                height="auto"
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.77758 0H13.3969C14.3767 0 15.1744 0.8004 15.1744 1.7922V17.4L13.3101 15.747L12.2609 14.7726L11.151 13.7373L11.6106 15.3468H1.77758C0.797741 15.3468 0 14.5464 0 13.5546V1.7922C0 0.8004 0.797741 0 1.77758 0ZM9.47752 10.6575C9.73765 10.9881 10.0498 11.3622 10.0498 11.3622C11.9661 11.3013 12.7032 10.0398 12.7032 10.0398C12.7032 7.2384 11.4545 4.9677 11.4545 4.9677C10.2059 4.0281 9.01795 4.0542 9.01795 4.0542L8.89655 4.1934C10.3706 4.6458 11.0557 5.2983 11.0557 5.2983C10.1539 4.8024 9.26941 4.5588 8.44565 4.4631C7.82133 4.3935 7.22303 4.4109 6.69409 4.4805C6.64867 4.4805 6.60986 4.48713 6.56612 4.49461C6.55976 4.49569 6.55329 4.4968 6.54668 4.4979C6.24319 4.524 5.50615 4.6371 4.57834 5.046C4.25751 5.1939 4.06675 5.2983 4.06675 5.2983C4.06675 5.2983 4.78645 4.611 6.34725 4.1586L6.26054 4.0542C6.26054 4.0542 5.0726 4.0281 3.82396 4.9677C3.82396 4.9677 2.57532 7.2384 2.57532 10.0398C2.57532 10.0398 3.30369 11.3013 5.22 11.3622C5.22 11.3622 5.54084 10.9707 5.80097 10.6401C4.69974 10.3095 4.28352 9.61351 4.28352 9.61351C4.28352 9.61351 4.37024 9.67441 4.52632 9.76141C4.53499 9.77011 4.54366 9.77881 4.561 9.78751C4.57401 9.79621 4.58701 9.80273 4.60002 9.80926C4.61303 9.81578 4.62603 9.82231 4.63904 9.83101C4.85582 9.95281 5.0726 10.0485 5.27203 10.1268C5.62755 10.266 6.05243 10.4052 6.54668 10.5009C7.19702 10.6227 7.96007 10.6662 8.7925 10.5096C9.20004 10.44 9.61625 10.3182 10.0498 10.1355C10.3533 10.0224 10.6915 9.85711 11.047 9.62221C11.047 9.62221 10.6134 10.3356 9.47752 10.6575ZM5.13306 8.2649C5.13306 7.73419 5.52326 7.29919 6.01751 7.29919C6.51176 7.29919 6.91063 7.73419 6.90196 8.2649C6.90196 8.7956 6.51176 9.2306 6.01751 9.2306C5.53193 9.2306 5.13306 8.7956 5.13306 8.2649ZM8.29801 8.2649C8.29801 7.73419 8.68821 7.29919 9.18246 7.29919C9.67671 7.29919 10.0669 7.73419 10.0669 8.2649C10.0669 8.7956 9.67671 9.2306 9.18246 9.2306C8.69688 9.2306 8.29801 8.7956 8.29801 8.2649Z"
                ></path>
              </svg>
              </a>
            <DiscordServerInformation>
              <h3>10 Controls Community</h3>
              <DiscordServerButtonContainer>
              <a
                href="https://discord.gg/10controls"
                target="_blank"
                rel="noreferrer"
              >
              <button>Join</button>
              </a>
              </DiscordServerButtonContainer>
              
            </DiscordServerInformation>
          </DiscordServerContainer>
        </F1FormContainer>
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default F1Register;

const F1FormHeadings = styled.form`
  
`;

const F1FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.333%;
  margin-left: auto;
  margin-right: auto;
  row-gap: 16px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const DiscordServerContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    column-gap: 24px;
`;

const DiscordServerInformation = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 16px;

     button {
      width: 100%;
      border-radius: 0;
    }
`;

const DiscordServerButtonContainer = styled.div`
    width: 100%;
`;
