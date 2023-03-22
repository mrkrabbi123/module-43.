const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}


const showCountry = countries => {
    console.log(countries[0])
    const containerHtml = countries.map(country => getCountry(country))
    const container = document.getElementById('divContainer')
    container.innerHTML = containerHtml .join(' ');
}

const getCountry = country => {
    return `
    <div class= 'country'>
    <h1>${country.name.common}</h1>
    <img src="${country.flags.png}" alt="" srcset="">
    </div>`
}
loadCountries()