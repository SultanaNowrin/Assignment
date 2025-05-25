const loadCountryAPI = () =>{

    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
loadCountryAPI()
const displayCountries = (countries) =>{
        //console.log(countries);
    const uiDiv = document.getElementById('countries');

     countries.forEach(country => {
           console.log(country)
          const div = document.createElement('div');
          div.classList.add('country')
          div.innerHTML = `
                <img src="${country.flags.png}" alt="">
                <h3>Name: ${country.name.common}</h3>
                <p>Population: ${country.population}</p>
                <button onclick="loadCountryByName('${country.name.common}')">See Details</button>
          `
          //console.log(div);
         uiDiv.appendChild(div)
    } );

}
const loadCountryByName = (name) =>{
      //console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
      //console.log(url);
      fetch(url)
      .then(res=>res.json())
      .then(data=>displaySingleCountry(data[0]))

}
const displaySingleCountry = (country)=>{
      window. scrollTo(0, 0);
    //console.log(country);
    const countryDetails = document.getElementById('country-details');
      countryDetails.classList.add('details-country')
    countryDetails.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <p>Languages: ${country?.languages?.ben}</p>
        <p>Status: ${country.status}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <iframe src="${country?.maps?.googleMaps}" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `

}