import magnifyIcon from "../../assets/search.svg";
import { useTranslation } from "react-i18next";

const Search = ({ inputText, setInputText, searchLocation, location }) => {
  const handleInputBox = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const { t } = useTranslation();

  const searchStyles = location[0].lat ? `mt-7` : `mt-0`;

  return (
    <div className={`opacity-80 w-full h-12 px-5 ${searchStyles}`}>
      <div className="relative w-full h-full group">
        <input
          value={inputText}
          className="w-full h-full pl-4 font-bold rounded-full relative"
          onChange={(e) => handleInputBox(e)}
          onKeyUp={searchLocation}
          type={"text"}
          placeholder={t("part5")}
        />
        <img
          src={magnifyIcon}
          alt="magnify icon"
          className="absolute w-5 h-5 top-3 right-5"
        />
      </div>
    </div>
  );
};

export default Search;
