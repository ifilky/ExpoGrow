import './Menu.css'

const Menu = () => {
    return (
        <header className='menu'>
            <div>
                <img src='/img/logotipo.png' alt='logo da marca javacoffee'/>
                <h1>ExpoGrow</h1>
            </div>
            <nav>
                <ul>
                    <li><a href='#form'>Divulgue seu produto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu