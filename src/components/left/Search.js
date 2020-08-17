import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";

function Search() {
  const searchString = useSelector(
    (state) => state.application.contactSearchString
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(contactSearchStringSet(event.target.value));
  };

  return (
    <input
      placeholder="Search contact"
      className="search-contact"
      value={searchString}
      onChange={handleChange}
    />
  );
}

export default Search;
