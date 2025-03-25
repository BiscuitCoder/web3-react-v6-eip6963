"use client"
import React from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { EIP6963Connector } from './eip6963-connector'
import EipFeat  from './components/EIPFeat';

const injected = new InjectedConnector({});//readonly supportedChainIds?: number[];
enum ConnectorNames {
  Injected = 'Injected'
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected
}


function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

function App() {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React<Web3Provider>();
  return (
    <div className='text-center p-6 space-y-8'>
      <h1 className='text-2xl font-bold'>web3-react V6 Fix EIP6963</h1>

      <div className='flex justify-center space-x-6'>

        <div className='w-[1030px] border rounded-2xl p-4 text-left space-y-3'>

          <div>💡 active: {active ? 'true' : 'false'}</div>
          <div>🔗 chainId: {chainId && chainId.toString() || '~'}</div>
          <div>👤 account: {account && account.toString() || '~'}</div>
          <div>🚫 error: {error && error.message || '~'}</div>    
          <div>
            {
              active && <button className='btn border-red-400 text-red-400 mt-2' onClick={()=>deactivate()}>Deactivate</button>
            }
          </div>

          <hr />

         <div>
          🚨 The default injection method is suitable for APP wallets and scenarios where only one wallet extension is installed.
           <br/> Once there are multiple wallet extensions injected in the current environment and the project is using version V6, users will not be able to freely switch wallet providers.
           <br/><br/>
           ✅ In this example, by instantiating AbstractConnector, listening for container injection via the EIP6963 protocol, and using the getProviders method to obtain all available containers, the compatibility issue of version v6 is thus resolved.
         </div>
         <div className='flex space-x-2'>
          <a href="https://github.com/Uniswap/web3-react/tree/v6/example" target="_blank" rel="noopener noreferrer" className='underline text-blue-600'>Official sdk example</a>
          <a href="https://github.com/Uniswap/web3-react/tree/v6" target="_blank" rel="noopener noreferrer" className='underline text-blue-600'>Official sdk</a>
         </div>
        </div>
        {/*  */}
        
       
      </div>
      {/* flex */}

      <div className='flex items-start space-x-6 justify-center'>
        <div className='w-[500px] border rounded-2xl p-4 text-left space-y-2'>
          <div>Default Injected container (Cannot be manually switched)</div>
          <button className='btn' onClick={() => activate(connectorsByName.Injected)}>Injected Connector</button>
        </div>
        {/*  */}
          

        <EipFeat/>
      </div>

      <div className='flex items-center justify-center space-x-4'>
        <div>About:&nbsp;<a  className='underline text-blue-600' href="https://0xspace.tech/" target='_blank'>https://0xspace.tech</a></div>
        <div>repo:&nbsp;<a  className='underline text-blue-600' href="https://github.com/BiscuitCoder" target='_blank'>https://github.com/BiscuitCoder</a></div>
      </div>

    </div>
  )
}