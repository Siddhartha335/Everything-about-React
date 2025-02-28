import React from 'react'
import fs from 'fs';
import path from 'path';
import ClientComponentone from './ClientComponentone';
// import ServerComponentTwo from './ServerComponentTwo';

const ServerComponentOne = () => {

  fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');

  return (
    <div>
      <h1>Server Component One</h1>
      {/* <ClientComponentone /> */}
      {/* <ServerComponentTwo /> */}
    </div>
  )
}

export default ServerComponentOne