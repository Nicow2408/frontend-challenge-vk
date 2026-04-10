export type CatImage = {
  id: string
  url: string
}

export const fetchCats = async (limit: number = 10): Promise<CatImage[]> => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    )

    if (!response.ok) {
      throw new Error('Ошибка запроса')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка при загрузке котиков:', error)
    return []
  }
}