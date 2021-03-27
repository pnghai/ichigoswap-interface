import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://strawberryswap.link/',
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
    href: 'http://strawberryswap.link/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://strawberryswap.link/leaf',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://strawberryswap.link/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://strawberryswap.link/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'http://strawberryswap.link/teams',
      },
      {
        label: 'Task Center',
        href: 'http://strawberryswap.link/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'http://strawberryswap.link/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'http://info.strawberryswap.link',
      },
      {
        label: 'Tokens',
        href: 'http://info.strawberryswap.link/tokens',
      },
      {
        label: 'Pairs',
        href: 'http://info.strawberryswap.link/pairs',
      },
      {
        label: 'Accounts',
        href: 'http://info.strawberryswap.link/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'http://strawberryswap.link/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'http://voting.strawberryswap.link',
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
