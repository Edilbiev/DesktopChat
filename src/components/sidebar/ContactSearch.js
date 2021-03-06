import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";

function ContactSearch() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.contacts.loading);

  const searchString = useSelector(
    (state) => state.application.contactSearchString
  );

  const handleChange = (event) => {
    dispatch(contactSearchStringSet(event.target.value));
  };

  return (
    <div className={loading ? "search-contact-disabled" : "search-contact"}>
      <div className="search-contact-icon">
        <i className="material-icons">search</i>
      </div>
      <div>
        <input
          disabled={loading}
          placeholder="Search contact"
          value={searchString}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ContactSearch;
