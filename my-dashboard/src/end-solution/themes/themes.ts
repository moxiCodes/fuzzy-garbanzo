import { ThemeConfig, ThemeOption } from "./types";

export const light: ThemeConfig = {
  primary: "#4851f4",
  background: "#ffffff",
  nav: "#f8f8f8",
  border: "#deebf1",
  text: "#202224",
  sidebar: "orange",
};

export const dark: ThemeConfig = {
  primary: "#4851f4",
  background: "#1f2023",
  nav: "#27282b",
  border: "#303236",
  text: "#f8f8f8",
  sidebar: "red",
};

export const birindar: ThemeConfig = {
  primary: "#dcd6ff",
  background: "#ffffd8",
  nav: "#f9dbfd",
  border: "#d4fffc",
  text: "#2c3539",
  sidebar: "#C3B1E1",
};

export const ugly: ThemeConfig = {
  primary: "hotpink",
  background: "white",
  nav: "red",
  border: "orange",
  text: "green",
  sidebar: "yellow",
};

export const bad: ThemeConfig = {
  primary: "red",
  background: "red",
  nav: "red",
  border: "red",
  text: "yellow",
  sidebar: "red",
};

type ThemeMappings = {
  [key in ThemeOption]: ThemeConfig;
};

export const themeMappings: ThemeMappings = {
  light: light,
  dark: dark,
  birindar: birindar,
  ugly: ugly,
  bad: bad,
};
