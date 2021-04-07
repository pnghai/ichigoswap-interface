import { ChainId, JSBI, Percent, Token, WETH } from '@pnghai/ichigoswap-sdk'

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS || '0x180223b04A1Da0Bb059a25a42D3354a726E45d1d'
export const STBE_FACTORY_ADDRESS = process.env.STBE_FACTORY_ADDRESS || '0xAA6301bDC1Fd7D673D85C7962762e4B64973CD6C'
export const INIT_CODE = process.env.INIT_CODE ||  '0x351e068bf9ed8b5fc37ce956f40ca9614882402b3bdb61800be1258f1108b4b6'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token'
)
export const BETH = new Token(ChainId.MAINNET, '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B', 18, 'BETH', 'Binance Beacon Ethereum Token')
export const STBE = new Token(ChainId.MAINNET, '0x641f5D9220b5d15A2A62455c61ef0455c34ECF11', 18, 'STBE', 'StrawberrySwap token') // todo mainnet contract of token
export const TSTBE = new Token(ChainId.BSCTESTNET, '0x641f5D9220b5d15A2A62455c61ef0455c34ECF11', 18, 'STBE', 'StrawberrySwap Token')
export const TBUSD = new Token(ChainId.BSCTESTNET, '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', 18, 'BUSD', 'Testnet Binance USD')
export const TETH = new Token(ChainId.BSCTESTNET, '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378', 18, 'ETH', 'Testnet Binance ETH')
export const TBTC = new Token(ChainId.BSCTESTNET, '0x6ce8da28e2f864420840cf74474eff5fd80e65b8', 18, 'BTCB', 'Testnet Binance BTC')


const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, BTCB, USDT, UST, ETH, STBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], TSTBE, TBUSD]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, STBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], TSTBE, TBUSD]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, BTCB, USDT, STBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], TSTBE, TBUSD, TETH, TBTC]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [STBE, WBNB],
    [BUSD, USDT],
    [DAI, USDT],
  ],
  [ChainId.BSCTESTNET]: [
    [
      TSTBE,
      new Token(ChainId.BSCTESTNET, '0xae13d989dac2f0debff460ac112a837c89baa7cd', 18, 'WBNB', 'Wrapped BNB'),
    ],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
