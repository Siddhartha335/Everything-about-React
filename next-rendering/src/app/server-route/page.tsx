import React from 'react'
import { serverUtils } from '@/utils/server-utils'
// import { clientUtils } from '@/utils/client-utils';
import ImageSlider from '@/components/ImageSlider';

const Server = () => {

    const res = serverUtils();
    // const clientRes = clientUtils();

    console.log(res)
    // console.log(clientRes);

  return (
    <div>
        <h1>Server {res}</h1>
        <ImageSlider />
    </div>
  )
}

export default Server