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

// Tipos para el estado de alerta
interface AlertState {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

const Form: React.FC = () => {
  const [alert, setAlert] = useState<AlertState>({
    message: "",
    type: "success",
    visible: false,
  });

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 4000); // Ocultar después de 4 segundos
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Asegurar que e.currentTarget sea tratado como HTMLFormElement
    const form = e.currentTarget;
  
    // Seleccionar los campos de entrada usando el atributo `name`
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
  
    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
  
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
    form.reset();
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
            <Img src="/assets/banner-img.png" alt="Banner Caras Image" />
          </BannerImg>
        </BannerRow>
      </Container>
    </Wrapper>
  );
};

export default Form;