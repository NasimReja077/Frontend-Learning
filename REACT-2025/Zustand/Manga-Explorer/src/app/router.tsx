import { createBrowserRouter } from "react-router-dom"
import MangaListPage from "@/features/manga/pages/MangaListPage"
import MangaDetailPage from "@/features/manga/pages/MangaDetailPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MangaListPage />,
  },
  {
    path: "/manga/:id",
    element: <MangaDetailPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
])