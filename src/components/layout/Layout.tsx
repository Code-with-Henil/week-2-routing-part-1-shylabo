import { Outlet } from 'react-router-dom'

const navMenu = [
  {
    value: 'home',
    label: 'Home',
    destination: '/',
  },
  {
    value: 'products',
    label: 'Products',
    destination: '/products',
  },
  {
    value: 'about',
    label: 'About',
    destination: '/about',
  },
  {
    value: 'contact',
    label: 'Contact',
    destination: '/contact',
  },
  {
    value: 'access',
    label: 'Access',
    destination: '/access',
  },
  {
    value: 'error',
    label: 'Not Ready',
    destination: '/not-ready',
  },
]
const Layout = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 w-full border p-5">
        <div className="text-lg font-extrabold text-amber-700">Shuya Bakery 🥐</div>
        <nav>
          <ul className="flex gap-5">
            {navMenu.map((menu) => (
              <li key={menu.value} className="hover:text-amber-800">
                <a href={menu.destination}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-1 border p-5">
        <Outlet />
      </main>
      <footer className="flex justify-center h-10 border p-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} Shuya Bakery</p>
      </footer>
    </div>
  )
}

export default Layout
