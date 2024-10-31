import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background-color: #eceff1;
`;

const SocialMediaSection = styled.section`
  background-color: #21d192;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: white;
`;

const FooterLink = styled.a`
  color: #212529;
  text-decoration: none;
  display: block;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: none;
  }
`;

const CopyrightSection = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 1rem 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaSection>
        <div>Get connected with us on social networks:</div>
        <div>
          <FooterLink
            href="https://www.facebook.com/milirosales97/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </FooterLink>

          <FooterLink href="https://www.google.com/" target="_blank">
            <FontAwesomeIcon icon={faGoogle} />
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/milirosales/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/milagros-rosales-71a835284/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </FooterLink>
          <FooterLink href="https://github.com/Miliros" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </FooterLink>
        </div>
      </SocialMediaSection>

      <CopyrightSection>
        <FooterLink href="https://rickandmortyapi.com/" target="_blank">
          © 2020 Copyright: RickAndMorty.com
        </FooterLink>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
