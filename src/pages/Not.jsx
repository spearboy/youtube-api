import React from 'react'

const Not = () => {
  return (
    <div  style={{width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
      <p style={{width: '100%'}}>정상적인 페이지가 아닙니다. 아래 페이지로 이동해주세요.</p>
      <a href="/">home</a>
      <a href="/today">today</a>
      <a href="/developer">developer</a>
      <a href="/webd">webd</a>
      <a href="/website">website</a>
      <a href="/gsap">gsap</a>
      <a href="/port">port</a>
      <a href="/youtube">youtube</a>
      <a href="/channel">channel</a>
      <a href="/video">video</a>
      <a href="/search">search</a>
    </div>
  )
}

export default Not