import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManfacturerProps {
  manufacturer: string;
  setManufacturer: (manfacturer: string) => void;
}
