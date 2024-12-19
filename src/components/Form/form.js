import React, { useState } from "react";
import {
  Wrapper,
  BannerRow,
  BannerDesc,
  BannerTitle,
  BannerText,
  NewsLetter,
  InputRow,
  InputField,
  SubscribeButton,
  AlertBox,
  BannerImg,
  Img,
  Container,
} from "./styles";
import bannerImage from "../../assets/banner-img.png";

const Form = () => {
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  const showAlert = (message, type) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 4000); // Ocultar después de 4 segundos
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

    if (!name) {
      showAlert("El campo de nombre no puede estar vacío.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("El correo electrónico no tiene un formato válido.", "error");
      return;
    }

    showAlert("¡Suscripción exitosa!", "success");
    e.target.reset();
  };

  return (
    <Wrapper>
      <AlertBox type={alert.type} visible={alert.visible}>
        {alert.message}
      </AlertBox>
      <Container>
      <BannerRow>
        <BannerDesc>
          <BannerTitle>
            <span>Suscríbete Ahora</span> a nuestro Newsletter
          </BannerTitle>
          <BannerText>
            Al suscribirte al newsletter de CARAS, tendrás acceso exclusivo a
            contenidos especiales, novedades sobre tus artistas favoritos,
            tendencias en moda y eventos destacados. Únete a miles de lectores
            que ya disfrutan de la mejor información directamente en su bandeja
            de entrada.
          </BannerText>
          <NewsLetter onSubmit={handleSubmit}>
            <InputRow>
              <InputField type="text" name="name" placeholder="Nombre" />
            </InputRow>
            <InputRow>
              <InputField type="email" name="email" placeholder="Email" />
            </InputRow>
            <SubscribeButton type="submit">
              <span>Enviar</span>
            </SubscribeButton>
          </NewsLetter>
        </BannerDesc>
        <BannerImg>
          <Img src={bannerImage} alt="Banner Caras Image" />
        </BannerImg>
      </BannerRow>
      </Container>
    </Wrapper>
  );
};

export default Form;