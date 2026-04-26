import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { mangaApi } from "../api"
import type { Manga } from "../types"

interface MangaState {
  mangas: Manga[]
  loading: boolean
  error: string | null
  fetchPopularMangas: () => Promise<void>
  fetchMangaById: (id: string) => Promise<void>
  fetchMangaByGenre: (genra: string) => Promise<void>
}

export const useMangaStore = create<MangaState>()(
  devtools(
    (set) => ({
      mangas: [],
      loading: false,
      error: null,

      fetchPopularMangas: async () => {
        set({ loading: true, error: null })
        try {
          const mangas = await mangaApi.getPopular(20)
          set({ mangas, loading: false })
        } catch (err) {
          set({ error: "Failed to fetch manga", loading: false })
        }
      },

      fetchMangaById: async (id: string) => {
        set({ loading: true, error: null })
        try {
          const manga = await mangaApi.getMangaById(id)
          set({ mangas: [manga], loading: false })
        } catch (err) {
          set({ error: "Failed to fetch manga", loading: false })
        }
      },

      fetchMangaByGenre: async (genre: string) => {
        set({ loading: true, error: null })
        try {
          const mangas = await mangaApi.getPopular(20)
          set({ mangas, loading: false })
        } catch (err) {
          set({ error: "Failed to fetch manga", loading: false })
        }
      },
      
    }),
    { name: "manga-store" } // DevTools label
  )
)