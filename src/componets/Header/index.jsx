import './style.css'

function Header({ titulo = 'Bem-vindo' }){
    return (
      <header>
        <h1>{ titulo }</h1>
      </header>
    )
}

export default Header