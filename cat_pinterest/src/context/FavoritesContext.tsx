import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type Cat = {
  id: string
  url: string
}

type FavoritesContextType = {
  favorites: Cat[]
  toggleFavorite: (cat: Cat) => void
  isFavorite: (cat: Cat) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Cat[]>(() => {
    try {
      const saved = localStorage.getItem('favorites')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (cat: Cat) => {
    setFavorites(prev => {
      if (prev.find(f => f.id === cat.id)) {
        return prev.filter(f => f.id !== cat.id)
      } else {
        return [...prev, cat]
      }
    })
  }

  const isFavorite = (cat: Cat) => favorites.some(f => f.id === cat.id)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}