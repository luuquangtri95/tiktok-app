// layouts
import { HeaderOnly } from '~/components/Layout/HeaderOnly'

// pages
import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Upload from '~/pages/Upload'

// public routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
]

export const privateRoutes = []
