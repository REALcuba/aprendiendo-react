import { useState } from 'react'
import { TwitterFollowCard } from './components/TwitterFollowCard/TwitterFollowCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='App'>
   <TwitterFollowCard userName="REALcuba" name="Angel Matos" isFollowing={true}/>
   <TwitterFollowCard userName="pheralb" name="Pablo Hernandez" isFollowing={false}/>
   <TwitterFollowCard userName="REALcuba" name="Angel Matos"/>

    </section>
  )
}

export default App
