import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { IThemeInterface } from "./types";

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
