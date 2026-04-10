import { useEffect, useState, useRef } from 'react'
import styles from './Home.module.css'
import { fetchCats, type CatImage } from '../../api/fetchCats'
import ImageCard from '../../components/ImageCard/ImageCard'
import Loader from './../../components/Loader/Loader'

function HomePage() {
  const [images, setImages] = useState<CatImage[]>([])
  const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
		const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    fetchCats()
  }, [])

	useEffect(() => {
		const loadCats = async () => {
			setLoading(true)
			const data = await fetchCats(10)
			setImages((prev) => [...prev, ...data])
			setLoading(false)
		}

		loadCats()
	}, [page])

	useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1)
      }
    },
    {
      threshold: 1,
    }
  )

  if (loaderRef.current) {
    observer.observe(loaderRef.current)
  }

  return () => {
    if (loaderRef.current) {
      observer.unobserve(loaderRef.current)
    }
  }
}, [loading])



  return (
    <div className={styles.container}>



			<div className={styles.grid}>
				{images.map((img) => (
					<ImageCard key={img.id} id={img.id} url={img.url} />
				))}
			</div>

      {loading && <Loader/>}

			<div ref={loaderRef} style={{ height: '20px' }} />
    </div>
  )
}

export default HomePage