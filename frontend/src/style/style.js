import styled from "styled-components";
export const Container = styled.div`
  font-family: "Impact", sans-serif;
  background: linear-gradient(45deg, #ff1a1a, #0044cc);
  color: white;
  text-align: center;
  padding: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Header = styled.header`
  font-size: 1.5em;
  color: #ffd700; /* Marvel Gold */
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1.2em;
`;

export const InputField = styled.input`
  font-size: 1.5em;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
`;

export const CheckButton = styled.button`
  background-color: #ff5733; 
  color: white;
  font-size: 1.2em;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #c70039;
  }
`;

export const ResultSection = styled.section`
  margin-top: 30px;
  font-size: 1.5em;

  p {
    font-size: 1.8em;
  }

  svg {
    font-size: 2em;
  }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  font-size: 1.2em;
  color: #b0b0b0;
`;

export const SocialLinks = styled.div`
  margin-top: 20px;

  svg {
    font-size: 3em;
    color: #ffd700; /* Marvel Gold */
    margin: 0 10px;
    cursor: pointer;
  }
`;