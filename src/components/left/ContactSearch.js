import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";

function ContactSearch() {
  const loading = useSelector((state) => state.contacts.loading);

  const searchString = useSelector(
    (state) => state.application.contactSearchString
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(contactSearchStringSet(event.target.value));
  };

  return (
    <>
      <i className="fa fa-search search-contact-icon" aria-hidden="true"/>
      <input
        disabled={loading}
        placeholder="Search contact"
        className="search-contact"
        value={searchString}
        onChange={handleChange}
      />
    </>
  );
}

export default ContactSearch;
