import React from 'react'

const Not = () => {
  return (
    <div  style={{width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
      <p style={{width: '100%'}}>정상적인 페이지가 아닙니다. 아래 페이지로 이동해주세요.</p>
      <a href="/" style={{ color: 'black'}}>home</a>
      <a href="/today" style={{ color: 'black'}}>today</a>
      <a href="/developer" style={{ color: 'black'}}>developer</a>
      <a href="/webd" style={{ color: 'black'}}>webd</a>
      <a href="/website" style={{ color: 'black'}}>website</a>
      <a href="/gsap" style={{ color: 'black'}}>gsap</a>
      <a href="/port" style={{ color: 'black'}}>port</a>
      <a href="/youtube" style={{ color: 'black'}}>youtube</a>
      <a href="/channel" style={{ color: 'black'}}>channel</a>
      <a href="/video" style={{ color: 'black'}}>video</a>
      <a href="/search" style={{ color: 'black'}}>search</a>
    </div>
  )
}

export default Not