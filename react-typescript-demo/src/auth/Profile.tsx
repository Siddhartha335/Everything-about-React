import React from 'react'

export type ProfileProps = {
    name:string
}

const Profile = ({name}:ProfileProps) => {
  return (
    <div>Private Profile Component. Name is {name}</div>
  )
}

export default Profile