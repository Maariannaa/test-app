import React from 'react';
import style from '../country.module.css'

const Country = ({name, flag, capital, population, area,  languages}) => {
    return (
        <div className={style.country}>
            <h1 className={style.title}>{name}</h1>
            <img src={flag} alt="Flag" className={style.flag} />
            <h2>Area: <span>{area}</span></h2>
            <h2>Capital: <span>{capital}</span></h2>
            <h2>Language</h2>
            <ol> 
                {
                    languages.map(language => (
                        <li><span>{language.name}</span></li>
                    ))
                }
            </ol> 
            <h1 className={style.title}>Population: <span>{population}</span></h1>
        </div>
    )
}

export default Country;