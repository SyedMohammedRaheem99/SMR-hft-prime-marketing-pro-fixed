import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function NavBar(){
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/hft_prime_logo_lightmode.png" alt="logo light" style={{height:38}} className="block dark:hidden" />
          <img src="/assets/hft_prime_logo_darkmode.png" alt="logo dark" style={{height:38}} className="hidden dark:block" />
          <div className="text-sm">HFT Prime Marketing</div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href='/'><a>Work</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/contact'><a>Contact</a></Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}