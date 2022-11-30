import React, { Component } from "react";

const SearchBox = ({ value, onSearch }) => {
  return (
    <input
      type='text'
      name='query'
      className='form-control my-3'
      placeholder='Search...'
      value={value}
      onChange={(e) => onSearch(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
