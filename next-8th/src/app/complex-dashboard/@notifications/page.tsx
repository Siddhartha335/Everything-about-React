import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <div>
      <h1>Notifications</h1>
      <Link href={'/complex-dashboard/archived'}>Archived Link</Link>
    </div>
  )
}

export default Notifications