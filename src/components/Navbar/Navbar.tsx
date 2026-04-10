import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const active = location.pathname === '/favourite' ? 'favorites' : 'all'

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          className={active === 'all' ? styles.active : ''}
          onClick={() => navigate('/')}
        >
          Все котики
        </button>
        <button
          className={active === 'favorites' ? styles.active : ''}
          onClick={() => navigate('/favourite')}
        >
          Любимые котики
        </button>
      </nav>
    </header>
  )
}

export default Navbar