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
}