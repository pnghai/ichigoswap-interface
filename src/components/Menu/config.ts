import { MenuEntry } from '@pnghai/ichigoswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://test.strawberryswap.link/',
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
    href: 'https://test.strawberryswap.link/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://test.strawberryswap.link/leaf',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://test.strawberryswap.link/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://test.strawberryswap.link/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://test.strawberryswap.link/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://test.strawberryswap.link/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://test.strawberryswap.link/profile',
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
  //   href: 'https://test.strawberryswap.link/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.strawberryswap.link',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
