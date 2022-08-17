import { Conference, Dates, MenuItem, TicketPurchasingOptions } from './types'

export default function Menu(conference: Conference, dates: Dates): { Top: MenuItem[]; Footer: MenuItem[] } {
  const topMenu: MenuItem[] = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/sponsorship',
      name: 'Sponsorship',
    },
    {
      href: '/code-of-conduct',
      name: 'Code of Conduct',
    },
  ]

  if (dates.RegistrationOpen || conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen) {
    topMenu.push({
      href: '/tickets',
      name: 'Tickets',
    })
  }

  if (!conference.HideVenue) {
    topMenu.push({
      href: '/venue',
      name: 'Venue',
    })
  }

  if (dates.AcceptingPresentations) {
    topMenu.push({
      href: '/cfp',
      name: 'CFP',
    })
  }

  if (dates.VotingOpen) {
    topMenu.push({
      href: '/vote',
      name: 'Vote',
    })
  }

  topMenu.push({
    href: '/agenda',
    name: 'Agenda',
  })

  topMenu.push({
    href: '/faq',
    name: 'FAQs',
  })

  topMenu.push({
    href: '/covid-policy',
    name: 'COVID-19 Policy',
  })

  if (conference.Socials.Blog) {
    topMenu.push({
      external: true,
      href: conference.Socials.Blog,
      name: 'Blog',
    })
  }

  topMenu.push({
    href: '/volunteer',
    name: 'Work With Us',
  })

  return {
    Top: topMenu,
    Footer: [
      {
        href: '/about',
        name: 'About Us',
      },
      {
        external: true,
        href: 'https://www.redbubble.com/people/dddperth',
        name: 'Merchandise',
      },
      {
        href: '/code-of-conduct',
        name: 'Code of Conduct',
      },
      {
        href: '/contact',
        name: 'Contact',
      },
    ] as MenuItem[],
  }
}
