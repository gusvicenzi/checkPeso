import { createRoot } from 'react-dom/client'
import './app.css'
import logo from '/assets/logo.png'
import { Home, Info, Folder, Refresh, Check } from '@material-ui/icons'
import React from 'react'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)

const iconStyle: React.CSSProperties = {
  fontSize: 25,
  color: '#F3F3F3'
}

function App() {
  return (
    <div className='container'>
      <header>
        <img src={logo} alt="Check Peso logo" />
        <div className='headerOptions'>
          <div className='buttonsContainer'>
            <button>
              <Home style={iconStyle} />
              <p className='lightText'>Início</p>
            </button>
            <button>
              <Info style={iconStyle} />
              <p className='lightText'>Sobre</p>
            </button>
          </div>
          <div className='buttonsContainer'>
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
          <h2>Teste</h2>
        </div>
      </main>

    </div>
  )
}
