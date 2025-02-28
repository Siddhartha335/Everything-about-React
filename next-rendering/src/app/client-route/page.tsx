"use client"

import React from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { clientUtils } from '@/utils/client-utils'
// import { serverUtils } from '@/utils/server-utils'
// import ImageSlider from '@/components/ImageSlider';

const Client = () => {

    // const res  = serverUtils();

    // console.log(res)

    const res = clientUtils();
    console.log(res)

    const {color} = useTheme();

  return (
    <div>
        <h1 style={{color: color.primary}}>Client</h1>
        <p>{res}</p>
    </div>
  )
}

export default Client