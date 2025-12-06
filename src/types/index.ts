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

interface IDish {
  id: number;
  name: string;
  price: number;
}

export interface IMenuItem {
  officeId: number;
  items: IDish[];
}

export interface IOffice {
  id: number;
  name: string;
}
