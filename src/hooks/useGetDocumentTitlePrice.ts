import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { STBE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const stbePriceUsd = priceData ? Number(priceData.data[STBE.address] ? priceData.data[STBE.address].price : 0) : 0

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
