import React from 'react'
import Telegram from '../../public/telegram'
import Phone from '../../public/phone'
import Instagramm from '../../public/instagramm'

function Header() {
  return (
    <>
    <div className="header">
        <div className="header__item">
            <div className="header__logo"></div>
            <div className="header__nav">
                <nav className="nav__bar">
                    <a href="">О нас</a>
                    
                    <a href="">Тарифы и цены </a>
                    <a href="">Наш офисы</a>
                </nav>
            </div>
            <div className="sistem">
            <ul>
                <li> 
                    <a href="https://www.instagram.com/yandex.go.pegas.park">
                    <Instagramm/>
                    </a>
                     </li>
                <li><a href="https://t.me/park_pegas_yandex">
                    <Telegram/>
                    </a> 
                     </li>
                <li> <a href="tel: +998997140050">
                     <Phone/> 
                </a>
                     </li>
            </ul>
            </div>
            <div className="header-button">
                <button> Оставить заявку</button>
            </div>
            <div className="header__lang">
                <a href="">RU</a>
                <span></span>
                <a href="">UZ</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header