import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, { rotation: 0 }, {
      rotation: 180, duration: 3, scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        markers: true,
        scrub: true,
      }
    })
  }, [])

  return (
    <>
      <div className="helper"></div>
      <main>
        <img ref={imgRef} src={reactLogo} className="logo react" alt="React logo" />
      </main>
      <div className="helper"></div>
    </>
  )
}

export default App
