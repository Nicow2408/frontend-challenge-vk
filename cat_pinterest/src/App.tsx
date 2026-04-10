import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import FavoritesPage from './pages/Favourites/FavouritesPage'
import Navbar from './components/Navbar/Navbar'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourite" element={<FavoritesPage />} />
          </Routes>
        </main>
      </Router>
    </FavoritesProvider>
  )
}

export default App