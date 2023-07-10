import { styled as muiStyled, CreateMUIStyled } from "@mui/material/styles";

/** Forward only props starting with $ to the dom */
const shouldForwardProp = (prop: string | number | symbol) =>
  typeof prop === "string" ? !prop.startsWith("$") : true;

export const styled: CreateMUIStyled<any> = (component: any, options: any) =>
  muiStyled(component, {
    shouldForwardProp,
    ...options,
  }) as ReturnType<CreateMUIStyled<any>>;
