import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x1b69351E63B19F9f18F5a51675AE54fF7f20D2f8' // multiCall contract
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
