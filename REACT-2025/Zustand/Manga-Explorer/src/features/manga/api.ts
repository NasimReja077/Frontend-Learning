import axios from "axios"
import type { Manga } from "./types"

const api = axios.create({
  baseURL: "https://api.mangadex.org",
})

export const mangaApi = {
  async getPopular(limit = 20) {
    const res = await api.get("/manga", {
      params: {
        limit,
        includes: ["cover_art"],
        "order[followedCount]": "desc", // Popular manga
      },
    })

    return res.data.data.map((manga: any) => {
      const coverRel = manga.relationships.find(
        (rel: any) => rel.type === "cover_art"
      )
      const fileName = coverRel?.attributes?.fileName

      return {
        id: manga.id,
        title:
          manga.attributes.title.en ||
          Object.values(manga.attributes.title)[0],
        description: manga.attributes.description?.en || "",
        status: manga.attributes.status,
        year: manga.attributes.year,
        coverUrl: fileName
          ? `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`
          : undefined,
      }
    })
  },

  async getMangaById(id: string) {
    const res = await api.get(`/manga/${id}`, {
      params: { includes: ["cover_art"] },
    })

    const manga = res.data.data
    const coverRel = manga.relationships.find(
      (rel: any) => rel.type === "cover_art"
    )
    const fileName = coverRel?.attributes?.fileName

    return {
      id: manga.id,
      title:
        manga.attributes.title.en ||
        Object.values(manga.attributes.title)[0],
      description: manga.attributes.description?.en || "",
      status: manga.attributes.status,
      year: manga.attributes.year,
      coverUrl: fileName
        ? `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`
        : undefined,
    } as Manga
  },
}