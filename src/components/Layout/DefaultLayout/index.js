import Header from '../components/Header'
import Sidebar from './Sidebar'

export function DefaultLayout({ children }) {
  console.log(children)
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}
