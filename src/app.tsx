import { createRoot } from 'react-dom/client'
import './app.css'
import logo from '/assets/logo.jpg'
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="Check Peso logo" />
        <div className='headerOptions'>
          <div>
            <button>Início</button>
            <button>Sobre</button>
          </div>
          <div>
            <label htmlFor="serialPort">Porta serial:</label>
            <select name="serialPort" id="serialPort">
              <option value="COM1">COM1</option>
              <option value="COM2">COM2</option>
              <option value="COM3">COM3</option>
              <option value="COM4">COM4</option>
            </select>
            <button>Atualizar lista</button>
          </div>
        </div>
      </header>
      <main>
      </main>

      <h1>Teste</h1>
    </div>
  )
}
