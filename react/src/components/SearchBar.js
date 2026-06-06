import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert('Qiymat kiritish majburiy!');
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Pokemon qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Qidirish
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
