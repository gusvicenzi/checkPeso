import { createRoot } from 'react-dom/client'
import './app.css'
import logo from '/assets/logo.png'
import { Home, Info, Folder, Refresh, Check } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)

const iconStyle: React.CSSProperties = {
  fontSize: 25,
  color: '#F3F3F3',
  marginRight: 5
}

function App() {
  const [showHome, setShowHome] = useState(true)

  useEffect(() => {
    const homeBtn = document.querySelector('.headerOptions > .buttonsContainer > button > p')
    const infoBtn = document.querySelector('.headerOptions > .buttonsContainer button:nth-child(2) > p')
    if (showHome) {
      homeBtn.classList.add('selected')
      infoBtn.classList.remove('selected')
    } else {
      homeBtn.classList.remove('selected')
      infoBtn.classList.add('selected')
    }
  }, [showHome])

  return (
    <div className='container'>
      <header>
        <img src={logo} alt="Check Peso logo" />
        <div className='headerOptions'>
          <div className='buttonsContainer'>
            <button onClick={() => { setShowHome(true) }}>
              <Home style={iconStyle} />
              <p className='lightText'>Início</p>
            </button>
            <button onClick={() => { setShowHome(false) }}>
              <Info style={iconStyle} />
              <p className='lightText'>Sobre</p>
            </button>
          </div>
          <div className={`buttonsContainer ${showHome ? '' : 'hidden'}`}>
            <label htmlFor="serialPort" className='lightText'>Porta serial:</label>
            <select name="serialPort" id="serialPort">
              <option value="COM1">COM1</option>
              <option value="COM2">COM2</option>
              <option value="COM3">COM3</option>
              <option value="COM4">COM4</option>
            </select>
            <button>
              <Check style={iconStyle} />
              <p className='lightText'>Atualizar lista</p>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="leftSideBar">
          <div className="buttonsContainer">
            <button>
              <Folder style={iconStyle} />
              <p className='lightText'>Abrir arquivo</p>
            </button>
            <button>
              <Refresh style={iconStyle} />
              <p className='lightText'>Reiniciar</p>
            </button>
            <button>
              <Check style={iconStyle} />
              <p className='lightText'>Atualizar</p>
            </button>
          </div>
        </div>
        <div className="central">
          {showHome
            ?
            <div className='homeScreen'>
              <Info style={{ fontSize: 30, color: 'rgba(13,161,247,0.79)' }} />
              <h1>Selecione um programa para atualizar a placa</h1>
            </div>
            :
            <p>Este programa, bem como seu código fonte, foram criados e disponibilizados pela equipe da CHECKPESO e podem ser usados livremente pelos seus clientes e parceiros.</p>}
        </div>
      </main>

    </div>
  )
}
