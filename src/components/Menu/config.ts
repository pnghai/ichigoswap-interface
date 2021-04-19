import { MenuEntry } from '@pnghai/ichigoswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://test1.strawberryswap.link/',
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
    href: 'https://test1.strawberryswap.link/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://test1.strawberryswap.link/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://test1.strawberryswap.link/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://test1.strawberryswap.link/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://test1.strawberryswap.link/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://test1.strawberryswap.link/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://test1.strawberryswap.link/profile',
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
  //   href: 'https://test1.strawberryswap.link/ifo',
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
