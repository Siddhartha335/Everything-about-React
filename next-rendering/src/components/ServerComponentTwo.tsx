import React from 'react'
import fs from 'fs';
import path from 'path';


const ServerComponentTwo = () => {

  fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');

  return (
    <div>Server Component Two</div>
  )
}

export default ServerComponentTwo