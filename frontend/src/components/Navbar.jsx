import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/collection' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const linkClass = ({ isActive }) =>
  `relative py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-[2px] after:rounded-full after:bg-[#9674b8] after:transition-all ${
    isActive
      ? 'text-[#694b86] after:w-5'
      : 'text-[#62596b] after:w-0 hover:text-[#694b86] hover:after:w-5'
  }`

const Navbar = () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible])

  const closeMenu = () => setVisible(false)

  return (
    <header className="relative z-40 -mx-4 border-b border-[#eee5ed] bg-[#fffdfa] sm:mx-[-5vw] md:mx-[-7vw] lg:mx-[-9vw]">
      <div className="mx-auto flex min-h-19 max-w-360 items-center justify-between gap-4 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <button
          type="button"
          onClick={() => setVisible(true)}
          aria-label="Open navigation menu"
          className="grid h-10 w-10 place-items-center rounded-full text-[#59446c] transition hover:bg-[#f6edf5] lg:hidden"
        >
          <img src={assets.menu_icon} className="h-4.5 w-4.5" alt="" />
        </button>

        <Link to="/" onClick={closeMenu} aria-label="Mermaid Island home" className="shrink-0">
          <img src={assets.logo} className="h-auto w-33 object-contain sm:w-39.5" alt="Mermaid Island" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:mx-8 lg:flex lg:justify-self-center xl:mx-12 xl:gap-10">
          {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>{link.label}</NavLink>)}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:ml-0 lg:justify-self-end">
          <button type="button" aria-label="Search products" className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-[#f6edf5]">
            <img src={assets.search_icon} className="w-4.5" alt="" />
          </button>
          <div className="group relative">
            <Link to="/login" aria-label="My account" className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-[#f6edf5]">
              <img src={assets.profile_icon} className="w-4.5" alt="" />
            </Link>
            <div className="invisible absolute right-0 top-full z-50 w-40 translate-y-2 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-[#eee5ed] bg-white p-2 text-sm text-[#62596b] shadow-xl shadow-[#5a43631a]">
                <Link to="/login" className="block rounded-xl px-3 py-2 hover:bg-[#fbf5fa] hover:text-[#694b86]">My account</Link>
                <Link to="/orders" className="block rounded-xl px-3 py-2 hover:bg-[#fbf5fa] hover:text-[#694b86]">My orders</Link>
              </div>
            </div>
          </div>
          <Link to="/cart" aria-label="Shopping bag" className="relative grid h-10 w-10 place-items-center rounded-full transition hover:bg-[#f6edf5]">
            <img src={assets.cart_icon} className="w-4.75" alt="" />
            <span className="absolute right-0.75 top-0.5 grid h-4.25 min-w-4.25 place-items-center rounded-full bg-[#9b79b9] px-1 text-[9px] font-semibold leading-none text-white">10</span>
          </Link>
          <Link to="/collection" className="ml-1 hidden rounded-full bg-[#6d527f] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white shadow-sm transition hover:bg-[#573c6b] sm:inline-flex">
            Shop now <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <nav aria-label="Mobile and tablet navigation" className={`fixed inset-0 z-60 bg-[#fffdfa] transition-transform duration-300 ease-out lg:hidden ${visible ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!visible}>
        <div className="flex h-full flex-col">
          <div className="flex min-h-19 items-center justify-between border-b border-[#eee5ed] px-5">
            <Link to="/" onClick={closeMenu}><img src={assets.logo} className="w-36.25" alt="Mermaid Island" /></Link>
            <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="grid h-10 w-10 place-items-center rounded-full text-2xl text-[#59446c] hover:bg-[#f6edf5]">×</button>
          </div>
          <div className="flex flex-col px-5 py-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b087ad]">Explore Mermaid Island</p>
            {links.map((link, index) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu} className={({ isActive }) => `flex items-center justify-between border-b border-[#eee5ed] py-5 text-lg font-medium ${isActive ? 'text-[#694b86]' : 'text-[#514757]'}`}>
                {link.label}<span className="text-[#c6abc4]">0{index + 1}</span>
              </NavLink>
            ))}
            <Link to="/collection" onClick={closeMenu} className="mt-8 flex items-center justify-center rounded-full bg-[#6d527f] px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white">Shop the collection <span className="ml-2">→</span></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
