import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { Container, Wrapper, Header, Title, Description, InputField, CheckButton, ResultSection, Footer, SocialLinks } from "../style/style";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { SpamChecker } from "../API/slice/API";

const SpamSlayer = () => {
  const [result, setResult] = useState({ text: "", icon: null, color: "" });
  const dispatch = useDispatch();

  const SpamSchema = Yup.object().shape({
    text: Yup.string().required("Text is required")
  });

  const handleSubmit = async (values) => {
    console.log(values.text, 'ezaan amin');
    const response = await dispatch(SpamChecker({ text: values.text }));
  

    if (response.payload === "spam") {
      setResult({
        text: "This is spam!",
        icon: <FaExclamationTriangle style={{ color: "red" }} />,
        color: "red"
      });
    } else {
      setResult({
        text: "This is not spam.",
        icon: <FaCheckCircle style={{ color: "green" }} />,
        color: "green"
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>SpamSlayer-3000: Defeat the Spam!</Title>
          <Description>Powered by advanced algorithms, built for superheroes.</Description>
        </Header>
        
        <Formik
          initialValues={{ text: '' }}
          validationSchema={SpamSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="text"
                placeholder="Enter text to check for spam"
                as={InputField}
              />
              {errors.text && touched.text ? (
                <div style={{ color: 'red', marginTop: '5px' }}>{errors.text}</div>
              ) : null}
              <CheckButton type="submit">Check Spam</CheckButton>
            </form>
          )}
        </Formik>

        <ResultSection>
          <p style={{ color: result.color }}>{result.text}</p>
          {result.icon}
        </ResultSection>

        <Footer>
          <p>Follow us on:</p>
          <SocialLinks>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </SocialLinks>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default SpamSlayer;
