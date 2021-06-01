import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { STBE,TSTBE } from '../constants'
import { NETWORK_CHAIN_ID } from '../connectors'

const STBE_ADDRESS = NETWORK_CHAIN_ID === 56 ? STBE.address : TSTBE.address

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const stbePriceUsd = priceData && priceData.data ? Number(priceData.data[STBE_ADDRESS] ? priceData.data[STBE_ADDRESS].price : 0) : 0

  const stbePriceUsdString =
    Number.isNaN(stbePriceUsd) || stbePriceUsd === 0
      ? ''
      : ` - $${stbePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `StrawberrySwap${stbePriceUsdString}`
  }, [stbePriceUsdString])
}
export default useGetDocumentTitlePrice
