import { useState } from "react"
import Profile from "./Profile"
const Dashboard = ({user}) => {
    const [like,setLike]= useState(9)
  return (
        <Profile user={user}></Profile>
  )
}

export default Dashboard
