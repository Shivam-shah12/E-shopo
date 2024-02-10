import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative mr-8">
      {
        theme === "light" ? <MdOutlineDarkMode size={25} onClick={()=> setTheme(theme === "light" ? "dark" :"light")}/>
         :
         <MdDarkMode size={25} onClick={()=> setTheme(theme === "light" ? "dark" :"light")}/>
      }
    </div>
  );
};

export default DarkMode;
