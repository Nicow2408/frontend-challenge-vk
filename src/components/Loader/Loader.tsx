import loaderGif from '../../ui/gif/loader.gif'
import styles from './Loader.module.css'

function Loader() {
	return(
		<div className={styles.loaderOverlay}>
			<div className={styles.loaderContainer}>
				<img src={loaderGif} alt='loading'/>
			</div>
		</div>
	)
}
export default Loader