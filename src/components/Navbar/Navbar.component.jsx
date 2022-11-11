import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { i18n } = useTranslation('common')

  const lngs = {
    en: { nativeName: 'English'},
    ru: { nativeName: 'Русский'}
  }

  return (
    <motion.div 
      className="flex text-lg font-bold gap-x-3 absolute right-8 top-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: .5 } }}
    >
     {Object.keys(lngs).map(lng => (
      <button 
        key={lng} 
        type="submit" 
        onClick={() => i18n.changeLanguage(lng)}
        className={i18n.language === lng ? 'text-white' : 'text-gray-400'}
      >
        {lng.toUpperCase()}
      </button>
     ))}
    </motion.div>
  )
}

export default Navbar