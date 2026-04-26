import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Manga } from "../types"
import { Link } from "react-router-dom"
import { FiBook } from "react-icons/fi"

export function MangaCard({ manga }: { manga: Manga }) {
  return (
    <Card className="w-full hover:shadow-xl transition-shadow">
      <CardHeader>
        <img
          src={manga.coverUrl}
          alt={manga.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <h3 className="font-bold line-clamp-2">{manga.title}</h3>
      </CardContent>
      <CardFooter>
        <Link
          to={`/manga/${manga.id}`}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FiBook /> View Details
        </Link>
      </CardFooter>
    </Card>
  )
}