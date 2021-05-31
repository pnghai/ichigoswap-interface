import { MenuEntry } from '@pnghai/ichigoswap-uikit'

export const MAIN_APP_LINK = process.env.REACT_APP_MAIN_APP_LINK || 'https://test1.strawberryswap.link'
const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: MAIN_APP_LINK,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${MAIN_APP_LINK}/farms`,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: `${MAIN_APP_LINK}/pools`,
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: `${MAIN_APP_LINK}/lottery`,
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: MAIN_APP_LINK+'/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: MAIN_APP_LINK+'/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: MAIN_APP_LINK+'/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: MAIN_APP_LINK+'/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://info.strawberryswap.link',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://info.strawberryswap.link/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://info.strawberryswap.link/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://info.strawberryswap.link/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: MAIN_APP_LINK+'/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: '#',
      },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.strawberryswap.link',
      // },
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      {
        label: 'Docs',
        href: '#',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
