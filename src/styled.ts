// import original module declarations
import 'styled-components';

// and extend them!
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      white: string;
      purple: string;
    };
  }
}
