import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dragonball-api.com/api',
})

export const characterApi = {
  getAll: async () => {
    const res = await api.get('/characters?limit=30')
    return res.data.items   // API returns { items: [...], meta: ..., links: ... }
  },
}