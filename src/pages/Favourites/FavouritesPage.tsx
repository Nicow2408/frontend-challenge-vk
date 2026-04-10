import ImageCard from "../../components/ImageCard/ImageCard"
import Loader from "../../components/Loader/Loader"
import { useFavorites } from "../../context/FavoritesContext"
import styles from './Favourites.module.css'

function FavoritesPage() {
  const { favorites } = useFavorites()
  const loading = false 
  const loaderRef = null 

  if (favorites.length === 0)
    return (
      <div className={styles.container}>
        <div className={styles.text}>Вы пока не добавили ни одного котика в любимые</div>
      </div>
    )

  return (
    <div className={styles.container}>
      {loading && <Loader/>}

      <div className={styles.grid}>
        {favorites.map(cat => (
          <ImageCard key={cat.id} id={cat.id} url={cat.url} />
        ))}
      </div>

      <div ref={loaderRef} style={{ height: '20px' }} />
    </div>
  )
}

export default FavoritesPage