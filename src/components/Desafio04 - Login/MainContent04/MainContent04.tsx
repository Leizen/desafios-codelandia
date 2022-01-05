import {
  Container,
  LeftContainer,
  RightContainer,
  WelcomeContainer,
  ContentContainer,
  LoginInfoContainer,
  LoginExtraContainer,
  Checkbox,
  EnterButton,
  GoogleButton,
  SignupContainer,
} from "./styles";
import iconsImage from "../../../assets/Desafio04 - Login/icons.svg";
import googleIcon from "../../../assets/Desafio04 - Login/google.svg";
import { MainFooter } from "../../MainFooter/MainFooter";

export function MainContent04() {
  return (
    <>
      <Container>
        <LeftContainer>
          <img src={iconsImage} alt="" />
        </LeftContainer>
        <RightContainer>
          <ContentContainer>
            <WelcomeContainer>
              <span>Bem vindo de volta</span>
              <h2>Faça login na sua conta</h2>
            </WelcomeContainer>
            <LoginInfoContainer>
              <label>E-mail</label>
              <input type="text" placeholder="codelandia@email.com" required />
              <label>Senha</label>
              <input type="text" placeholder="*********" required />
              <LoginExtraContainer>
                <Checkbox>
                  <input type="checkbox" />
                  <label>Lembre de mim</label>
                </Checkbox>
                <a href="/desafio-04-login">Esqueceu sua senha?</a>
              </LoginExtraContainer>
              <EnterButton>Entrar</EnterButton>
              <GoogleButton>
                <img src={googleIcon} alt="" />
                Ou faça login com o Google
              </GoogleButton>
            </LoginInfoContainer>
            <SignupContainer>
              <span>
                Não tem uma conta? <a href="/desafio-04-login">Cadastre-se</a>
              </span>
            </SignupContainer>
          </ContentContainer>
        </RightContainer>
      </Container>
      <MainFooter />
    </>
  );
}
