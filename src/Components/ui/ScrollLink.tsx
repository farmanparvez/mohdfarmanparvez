import { Link } from "react-scroll";
import React from "react";

type scrollLinkType = {
  children: React.ReactNode;
  to?: string;
  activeClassName?: string;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
};

export default function ScrollLink(props: scrollLinkType) {
  return <Link {...props}>{props.children}</Link>;
}
