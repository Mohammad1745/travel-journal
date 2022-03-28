import logo from '../logo.svg';

export default function Header(){
    return (
        <header className="app-header">
            <div className="app-header__icon"><i class="fas fa-globe-americas"></i></div>
            <div className="app-header__title">My Travel Journal</div>
        </header>
    )
}