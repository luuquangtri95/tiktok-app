import { useEffect, useState } from 'react'

function Home() {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {}, [])

  return <h2 style={{ textAlign: 'left' }}>Home Page</h2>
}

export default Home
