import { MenuEntry } from '@pnghai/ichigoswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://strawberryswap.link/',
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
    href: 'https://strawberryswap.link/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://strawberryswap.link/leaf',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://strawberryswap.link/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://strawberryswap.link/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://strawberryswap.link/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://strawberryswap.link/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://strawberryswap.link/profile',
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
  //   href: 'https://strawberryswap.link/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
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
    ],
  },
]

export default config
