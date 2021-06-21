import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All Here</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ Subscription . As of 03/26/2021 , the price of Disney
            + and the Disney bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  display: flex;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 24px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 24px;
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const Description = styled.p`
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  letter-spacing: 1.5px;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const SignUp = styled.button`
  width: 100%;
  max-width: 700px;
  padding: 15px 90px;
  color: white;
  margin-bottom: 12px;
  background-color: #0d00ff;
  outline-width: 0px;
  text-transform: uppercase;
  font-size: 24px;
  border: 1px solid transparent;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #3329ff;
  }
`;
