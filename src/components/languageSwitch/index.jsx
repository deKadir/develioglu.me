import { useLanguage } from "../../context/languageContext";
import cn from "classnames";
import { motion } from "framer-motion";
import { y, duration, delay, once } from "../../constants/config/animation.js";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  return;
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay }}
      className="fixed mt-4 z-[99] hidden md:block lg:block right-16 top-0"
    >
      <ul className="flex items-center justify-center">
        {["en", "tr"].map((lang, i) => (
          <li key={i} className="relative">
            <button
              aria-label={`change language to ${lang}`}
              className={cn({
                "  text-accent uppercase font-medium px-4 py-1 cursor-pointer transition-transform duration-500 after:absolute after:w-full after:bg-accent after:left-0 after:bottom-0 after:h-[1px] after:transition-all after:duration-300 after:scale-x-0 after:origin-center": true,
                " after:!scale-x-100 !font-bold": lang === language,
              })}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LanguageSwitch;
