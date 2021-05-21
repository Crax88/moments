import { ThemeProvider, defaultTheme } from "evergreen-ui";

export default function Theme({ children }) {
  return <ThemeProvider value={defaultTheme}>{children}</ThemeProvider>;
}
