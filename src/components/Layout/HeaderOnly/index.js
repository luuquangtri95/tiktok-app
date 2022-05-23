import Header from '../components/Header'

export function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>{children}</div>
    </div>
  )
}
