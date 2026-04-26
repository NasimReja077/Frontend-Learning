import { useParams } from "react-router-dom"
import { useMangaStore } from "../store/mangaStore"
import { useEffect } from "react"
export default function MangaDetailPage() {
  const { id } = useParams()
  const { fetchMangaById } = useMangaStore()

  useEffect(() => {
    if (id) {
      fetchMangaById(id)
    }
  }, [id, fetchMangaById])

  return <div className="p-8">Manga Detail for ID: {id} (expand as needed)</div>
}