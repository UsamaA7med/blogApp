import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TPost = {
userId:number
id:number
title:string
body:string
}
