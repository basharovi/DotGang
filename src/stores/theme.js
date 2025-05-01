import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: localStorage.getItem('darkMode') === 'true' || 
              window.matchMedia && 
              window.matchMedia('(prefers-color-scheme: dark)').matches
  }),
  
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode.toString())
      this.applyTheme()
    },
    
    applyTheme() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    
    initializeTheme() {
      this.applyTheme()
    }
  }
}) 