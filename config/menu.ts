import {MenuItem} from "./types";

export default class Menu {
  static Top : MenuItem[] = [
    {
      href: "/",
      name: "Home"
    },
    {
      href: "/about",
      name: "About"
    },
    {
      href: "/faq",
      name: "FAQs"
    }
  ];
  static Footer : MenuItem[] = [
    {
      href: "/about",
      name: "About Us"
    },
    {
      href: "/code-of-conduct",
      name: "Code of Conduct"
    },
    {
      href: "/contact",
      name: "Contact"
    }
  ];
}