import './Menu.css'

const Menu = () => {
    return (
        <header className='menu'>
            <div>
                <img src='/img/logotipo.png' alt='logo da marca javacoffee'/>
                <h1>TerraViva</h1>
            </div>
            <nav>
                <ul>
                    <li><a href='http://localhost:3000'>Início</a></li>
                    <li><a href='http://localhost:3000'>Colaboradores</a></li>
                    <li><a href='http://localhost:3000'>Faça Parte</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu