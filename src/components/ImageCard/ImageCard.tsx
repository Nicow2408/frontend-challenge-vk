import styles from './ImageCard.module.css'
import emptyHeart from '../../ui/icons/emptyHeart.svg'
import filledHeart from '../../ui/icons/filledHeart.svg'
import { useFavorites } from '../../context/FavoritesContext'

type Props = {
	id: string
  url: string
}

function ImageCard({ id, url }: Props) {
	const { toggleFavorite, isFavorite} =useFavorites()
	const favourite = isFavorite({ id, url})

  return (
    <div className={styles.card}>
      <img src={url} alt="cat" className={styles.catImage} />
      <img 
			src={favourite ? filledHeart : emptyHeart} 
			alt="heart" 
			className={styles.heartIcon} 
			onClick={ () => toggleFavorite({ id, url})}/>
    </div>
  )
}

export default ImageCard