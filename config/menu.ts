interface MenuItem {
  href : string,
  name : string
}

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