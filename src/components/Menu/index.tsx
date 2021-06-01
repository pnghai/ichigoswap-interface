import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@pnghai/ichigoswap-uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'
import { STBE, TSTBE } from '../../constants'
import { NETWORK_CHAIN_ID } from '../../connectors'

const STBE_ADDRESS = NETWORK_CHAIN_ID === 56 ? STBE.address : TSTBE.address
const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const stbePriceUsd = priceData && priceData.data ? Number(priceData.data[STBE_ADDRESS] ? priceData.data[STBE_ADDRESS].price : undefined) : undefined
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      stbePriceUsd={stbePriceUsd}
      priceLink={`${process.env.REACT_APP_INFO_LINK}/token/${STBE_ADDRESS}`}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
