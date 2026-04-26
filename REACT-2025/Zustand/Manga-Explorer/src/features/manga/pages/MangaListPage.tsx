import { useEffect } from "react"
import { useMangaStore } from "../store/mangaStore"
import { MangaCard } from "../components/MangaCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FiSearch } from "react-icons/fi"

export default function MangaListPage() {
  const { mangas, loading, fetchPopularMangas } = useMangaStore()

  useEffect(() => {
    fetchPopularMangas()
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-3 text-muted-foreground" />
            <Input placeholder="Search manga..." className="pl-10" />
          </div>
          <Button onClick={fetchPopularMangas}>Refresh</Button>
        </div>

        {loading ? (
          <p>Loading amazing manga...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {mangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}