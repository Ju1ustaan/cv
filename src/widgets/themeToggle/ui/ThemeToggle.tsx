import { MoonIcon, SunIcon } from "@/assets/icons/icons"
import { useTheme } from "@/app/porviders/themeProvider"

import '@/index.css'

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <button className="toggle" onClick={toggleTheme}>
      {theme === 'light'
        ? <p className="toggle__text"><MoonIcon width={18} height={18} />Dark</p>
        : <p className="toggle__text"><SunIcon width={18} height={18} />Light</p>}
    </button>
  )
}