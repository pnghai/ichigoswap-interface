import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS || '0x2669d0367DF20452bC7E3fAF38743fD407399A7f'
export const INIT_CODE = process.env.INIT_CODE ||  '0x33fb68bb68bb8459710d78d7e63205539553b50d54bd155189d6a58b1895043'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')
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
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', 18, 'BTCB', 'Binance BTC')
export const MSTBE = new Token(ChainId.MAINNET, '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95', 18, 'STBE', 'ApeSwap token')
export const STBE = new Token(ChainId.BSCTESTNET, '0xC987BEA2149629ff83C11FfAbfD07b45ecb94700', 18, 'STBE', 'ApeSwap Token')
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
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST, ETH, MSTBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], STBE, TBUSD]
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
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, MSTBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], STBE, TBUSD]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, MSTBE],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], STBE, TBUSD, TETH, TBTC]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18, 'STBE', 'StrawberrySwap Token'),
      new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    ],
    [BUSD, USDT],
    [DAI, USDT],
  ],
  [ChainId.BSCTESTNET]: [
    [
      new Token(ChainId.BSCTESTNET, '0x1923d2eFCa291C0B280DbBF3923019374C2bb3D1', 18, 'STBE', 'StrawberrySwap Token'),
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
