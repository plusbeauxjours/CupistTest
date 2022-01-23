import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      glamBlue: string;
      black: string;
      gray1: string;
      gray2: string;
      gray4: string;
      darkGray: string;
      gradientGray: string;
      white: string;
    };
    fontSize: {
      S: string;
      M: string;
      L: string;
      XL: string;
      XXL: string;
      HeaderTitle: string;
    };
    fontWeight: {
      light: string;
      regular: string;
      semiBold: string;
      bold: string;
    };
  }
}
