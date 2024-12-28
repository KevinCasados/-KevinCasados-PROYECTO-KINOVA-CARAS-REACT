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
  
// Helpers: Mixins convertidos a funciones tipadas
mixins: {
  flexCenter: (
    direction: "row" | "column" = "row",
    justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" = "center",
    align: "flex-start" | "flex-end" | "center" | "stretch" = "center"
  ): string => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  transition: (properties: string = "all"): string => `
    transition: ${properties} 0.3s ease-in-out;
  `,

  responsive: (breakpoint: string): string => `
    @media (max-width: ${breakpoint}) {
      @content;
    }
  `,
},
};

// Exporta el tipo del tema para usarlo en styled-components
export type ThemeType = typeof theme;