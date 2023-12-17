import './Header.css'

function Header() {
    return(
    <div className="header">
        <h1 className="title">Family Wellness</h1>
        <p>Massage Therapy</p>
        <div className="list-container">
            <ul className="list">
                <li className="home">Home</li>
                <li>About</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;