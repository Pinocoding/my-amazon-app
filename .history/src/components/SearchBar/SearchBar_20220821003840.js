import React, { useState, useContext, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { scrollToTop } from "../Backtotop/Backtotop";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";

import "./SearchBar.css";

function SearchBar({ setTextActive }) {
  const ref = useRef();
  const context = useContext(DataContext);
  const isDark = context.isDark;
  const searchData = context.searchData;
  const [activeShow, setActiveShow] = useState(false);

  const [search, setSearch] = useState("");
  const handleClick = async () => {
    await setActiveShow(true);
    await setTextActive(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (activeShow && ref.current && !ref.current.contains(e.target)) {
        setActiveShow(false);
        setTextActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [activeShow]);

  const handleResult = async (name) => {
    await setSearch(name);
    await setActiveShow(false);
    await setTextActive(false);
    await scrollToTop();
  };
  return (
    <div
      ref={ref}
      className={`header__search ${
        isDark ? "header__search-dark" : "header__search-light"
      }`}
    >
      <input
        tabIndex={0}
        className="header__searchInput"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleClick}
      />
      <SearchIcon className="header__searchIcon" />
      {activeShow && (
        <ul className="header__searchResult">
          {searchData
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <li onClick={() => handleResult(item.name)}>{item.name}</li>
                </Link>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
