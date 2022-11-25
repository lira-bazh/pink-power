import React from 'react'
import { PinkLogo, CloudLink } from 'atoms'
import "./style.scss"

export const Main = () => {
  const devices = ["Смартфона", "Планшета", "Компьютера", "Бизнеса"]

  return (
    <div className='main-page'>
        <div className='main-page__header'><PinkLogo/></div>
        <div className='main-page__content'>
          <div className='main-page__links'>
            ДЛЯ
            <ul className='devices'>
              {devices.map((device, index) => {
                return (<li><CloudLink to="/" title={device}/></li>)
              })}
            </ul>
            <div className='services'></div>
          </div>
          <div className='main-page__order'>
            <div className='order-text'>С PINK POWER интернет будет с вами везде и всегда</div>
          </div>
        </div>

    </div>
  )
}
