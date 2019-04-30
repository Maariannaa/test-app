import React, {useEffect, useState} from 'react';
import Country from './Country'
import '../App.css';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

const Countries = () =>{
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('united');

  useEffect(() => {getCountries()}, [query])

  const getCountries = async  () => {
    const response = await fetch( `https://restcountries.eu/rest/v2/name/${query}`)
    const data = await response.json();
    setCountries(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  const sortedPopulation = countries.sort((a, b) => {
    return a.population - b.population;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find your country</h1>
        <form className='searchForm' onSubmit={getSearch}>
          <Input placeholder='Search'
                 className='searchInput'
                 value={search}
                 onChange={updateSearch}/>
          <button type='submit' className='searchBtn'>
            <SearchIcon />
          </button>
        </form>
      </header>
      <div className='country'>
        {countries.map(country => 
            <Country key={country.name}
                     name={country.name} 
                     flag={country.flag}
                     capital={country.capital} 
                     area={country.area}
                     population={country.population}
                     languages={country.languages}/>)} 
      </div>
    </div>
  );
}

export default Countries;