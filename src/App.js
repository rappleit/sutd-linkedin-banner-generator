import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [logoImg, setLogoImg] = useState(null)
  const canvas = useRef(null)

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')

  const bannerWidth = 1584
  const bannerHeight = 396

  useEffect(() => {
    const sutdLogo = new Image();
    sutdLogo.src = "/sutd-logo-white.png"
    sutdLogo.onload = () => setLogoImg(sutdLogo)
  }, [])

  useEffect(() => {
    if(logoImg && canvas) {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, bannerWidth, bannerHeight)
      ctx.drawImage(logoImg, bannerWidth-280, 40, logoImg.width*0.3, logoImg.height*0.3)

      ctx.font = "72px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "right"

      ctx.fillText(name, (bannerWidth-64), (bannerHeight-120))

      ctx.font = "44px Arial"
      ctx.fillText(tagline, (bannerWidth-64), (bannerHeight-64))

    }
  }, [logoImg, canvas, name, tagline])

  return (
    <div>
      <header>
        <h1>SUTD Linkedin Banner</h1>
      </header>
      
      <div>
        <canvas 
          ref={canvas}
          width={bannerWidth}
          height={bannerHeight}
          style={{"width": `${bannerWidth/3}px`, "height": `${bannerHeight/3}px`}}
        />
      </div>

      <div>
        <input type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input type="text"
          value={tagline}
          onChange={e => setTagline(e.target.value)}
        />
      </div>

    </div>
  )
}

export default App;
