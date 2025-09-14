import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle(){
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true),[])
  if(!mounted) return <button aria-label='toggle theme' className='px-2 py-1 rounded'>🌓</button>
  return (
    <button
      aria-label='toggle theme'
      onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='px-3 py-1 rounded border'
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
