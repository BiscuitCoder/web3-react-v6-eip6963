"use client"
import React, { useEffect, useState } from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { EIP6963Connector,getProviders } from '../custom-connector'

export default function() {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React<Web3Provider>();
  const [currProviders, setCurrProviders] = useState<any>({});
  useEffect(()=>{
   setCurrProviders(getProviders());
  },[])

  const login = (name:string) => {
      const eip6963Connector = new EIP6963Connector({name});
      activate(eip6963Connector);
  }

  return (

     <div className='flex items-start justify-center space-x-6'>

        <div className='w-[500px] border rounded-2xl p-4 text-left space-y-2'>
            <div>Available EIP6963 wallets (click to switch providers)</div>
            <div className='flex items-center space-x-2'>
            {
               Object.keys(currProviders).length ?
               Object.keys(currProviders).map((name,index) =>(<button className='btn' onClick={()=>login(name)}  key={index}>{name}</button>))
               :
               <div className='text-red-400'>None available Providers</div>
            }
            </div>

        </div>
        {/*  */}
        
     </div>
  )
}