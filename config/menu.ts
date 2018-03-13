import {MenuItem} from "./types";
import getConferenceDates from "./dates";
import Conference from "./conference";

const topMenu : MenuItem[] = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/about",
    name: "About"
  },
  {
    href: "/sponsorship",
    name: "Sponsorship"
  }
];

const dates = getConferenceDates(Conference);

if (dates.RegistrationOpen) {
  topMenu.push({
    href: "/tickets",
    name: "Tickets"
  });
}

if (!Conference.HideVenue) {
  topMenu.push({
    href: "/venue",
    name: "Venue"
  });
}

if (dates.AcceptingPresentations) {
  topMenu.push({
    href: "/cfp",
    name: "CFP"
  });
}

if (dates.VotingOpen) {
  topMenu.push({
    href: "/vote",
    name: "Vote"
  });
}

topMenu.push({
  href: "/agenda",
  name: "Agenda"
});

topMenu.push({
  href: "https://blog.dddperth.com/",
  name: "Blog"
});
topMenu.push({
  href: "https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ",
  name: "Videos"
});
topMenu.push({
  href: "/faq",
  name: "FAQs"
});

export default class Menu {
  static Top : MenuItem[] = topMenu;
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