import type { JSX } from "react";

export interface IProblemData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IFeaturesData {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ISVGIconProps {
  width?: string;
  height?: string;
  color?: string;
}
