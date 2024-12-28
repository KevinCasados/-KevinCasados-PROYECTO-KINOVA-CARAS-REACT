import styled from "styled-components";

interface AlertBoxProps {
  type: "success" | "error";
  visible: boolean;
}

export const Wrapper = styled.section`
  background-image: url('/assets/banner-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 36px;
  background-position-y: 52%;
  min-height: 94vh;

  @media (max-width: 1144px) {
    padding-inline: 20px;
  }
`;

export const Container = styled.article`
    padding: 0 20px;
    max-width: 1840px;
    margin: 0 auto;
`;

export const BannerRow = styled.div`
  display: flex;
  margin: 0 -1rem;
  padding-top: 5rem;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 1094px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  &.div {
    padding: 0 1rem;
  }
`;

export const BannerDesc = styled.div`
  width: 50%;

  @media (max-width: 1094px) {
    width: 100%;
    text-align: center;
  }
`;

export const BannerTitle = styled.h1`
  font-weight: 900;
  font-size: 3.646vw;
  line-height: 1;

  span {
    display: block;
    color: #ed1e1e;
  }

  @media (max-width: 1144px) {
    font-size: 54px;
  }

  @media (max-width: 1094px) {
    font-size: 43px;
  }
`;

export const BannerText = styled.p`
  font-size: 14.9px;

  @media (max-width: 1144px) {
    font-size: 14px;
  }

  @media (max-width: 1094px) {
    font-size: 13px;
  }
`;

export const NewsLetter = styled.form`
  width: 70%;

  @media (max-width: 1094px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InputRow = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputField = styled.input`
  width: 16.465vw;
  background-color: #ffffff;
  border: 1px solid #b6b2b2;
  height: 2.083vw;
  border-radius: 30px;
  padding: 3px 25px;
  font-weight: 300;
  color: #7b7b7b;
  font-size: 0.833vw;

  @media (max-width: 1144px) {
    width: 29.465vw;
    height: 3.283vw;
    font-size: 1.233vw;
  }

  @media (max-width: 1094px) {
    width: 52.465vw;
    height: 4.083vw;
    font-size: 13px;
  }

  @media (max-width: 720px) {
    height: 43.7px;
  }
`;

export const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: #ed1e1e;
  color: #ffffff;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.7s;

  &:hover {
    background-color: #000;
    border-color: #ed1e1e;
    color: #ffffff;
    transition: all ease 0.7s;
  }

  @media (max-width: 1094px) {
    margin-bottom: 20px;
    background-color: #000000;
  }
`;

export const AlertBox = styled.div<AlertBoxProps>`
  position: fixed;
  top: ${(props) => (props.visible ? "20px" : "-100px")}; /* Controla la posición */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  transition: top 0.5s ease, opacity 0.5s ease; /* Transición suave */
  opacity: ${(props) => (props.visible ? "1" : "0")}; /* Añade efecto de desvanecimiento */
  color: #fff;
  background-color: ${(props) =>
    props.type === "success" ? "#4CAF50" : "#F44336"};
`;

export const BannerImg = styled.div`
  width: 50%;

  @media (max-width: 1094px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;