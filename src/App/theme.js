export const theme = {
    // Colores
    primaryColor: "#ed1e1e",
    secondaryColor: "#ffffff",
    textColor: "#000000",
    backgroundColor: "#ffffff",
  
    // Fuentes
    fontFamily: "'Poppins', 'Kumbh Sans', sans-serif",
  
    // Breakpoints
    breakpoint_xl: "1420px",
    breakpoint_lg: "1144px",
    breakpoint_md: "1094px",
    breakpoint_sm: "768px",
    breakpoint_xs: "720px",
  
    // Helpers: Mixins convertidos a funciones
    mixins: {
      flexCenter: (direction = "row", justify = "center", align = "center") => `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
      `,
  
      transition: (properties = "all") => `
        transition: ${properties} 0.3s ease-in-out;
      `,
  
      responsive: (breakpoint) => `
        @media (max-width: ${breakpoint}) {
          @content;
        }
      `,
    },
  };