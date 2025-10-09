import type { IGlobalData } from './types/global.type'

export const globalData: IGlobalData = {
  header: {
    logo: {
      name: 'micheal-weaver',
      to: '/',
    },
    navigation: [
      {
        text: '_hello',
        to: '/',
      },
      {
        text: '_about-me',
        to: '/about',
      },
      {
        text: '_projects',
        to: '/projects',
      },
      {
        text: '_contact-me',
        to: '/contacts',
      },
    ],
  },
}
