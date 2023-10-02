const postId = document.getElementById("postId");
const SeePost = document.getElementById("SeePost");

const ViewPost = document.getElementById("ViewPost");

const users = document.getElementById("users");
const signleCountry = document.getElementById("singleCountry");



const showPost = () => {
  const name = postId.value;

  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())

    .then((json) => showAllCountriess(json));
};

const showAllCountriess = (countries) => {
  ViewPost.innerHTML="";
  console.log(countries);
  countries.map((country) => {
    const {
      name: { common: countryName },
      capital,
      population,
      region,
      flags: { png },
    } = country;
    const newDiv = document.createElement("div");
    newDiv.classList.add("m-auto");
    newDiv.innerHTML = `
    <div class="py-3 h-100 ">
    <div class="card  h-100 bg-secondary-subtle text-center shadow rounded-5 p-1 ">
  <div class="card-body  text-primary-emphasis ">
  <img src=${png} style="width:75px">
  <h3 class="fs-2 " style=color:red;>Name: ${countryName}</h3>
  <p>Capital: ${capital}</p>
  <p>Region: ${region}</p>
  <p>Population: ${population}</p>
  <button class=" bg-success primary rounded-5" onclick="showSingleCountry ('${countryName}')">
  Details</button>
  </div>
  </div>
  </div>`;

 
  ViewPost.appendChild(newDiv);
  });
};




















fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) => showAllCountries(json /* .slice(0,15) */));
const showAllCountries = (countries) => {
  console.log(countries);
  countries.map((country) => {
    const {
      name: { common: countryName },
      capital,
      population,
      region,
      flags: { png },
    } = country;
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-sm-4");
    newDiv.innerHTML = `
    <div class="py-3 h-100 ">
    <div class="card  h-100 bg-secondary-subtle text-center shadow rounded-5 p-1 ">
  <div class="card-body  text-primary-emphasis ">
  <img src=${png} style="width:75px">
  <h3 class="fs-2 " style=color:red;>Name: ${countryName}</h3>
  <p>Capital: ${capital}</p>
  <p>Region: ${region}</p>
  <p>Population: ${population}</p>
  <button class=" bg-success primary rounded-5" onclick="showSingleCountry ('${countryName}')">
  Details</button>
  </div>
  </div>
  </div>`;
    users.appendChild(newDiv);
  });
};
const showSingleCountry = (countryName) => {
  signleCountry.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((json) => {
      const {
        name: { common: countryName },
        region,
        continents,
        independent,
        latlng,
        status,
        languages: { eng },
        timezones,
        flags: { png },
        maps: { googleMaps },
      } = json[0];
      const newDiv = document.createElement("div");
      newDiv.innerHTML = "";
      newDiv.classList.add("container");
      newDiv.innerHTML = `
      <div class="card  mb-3   bg-dark-subtle fs-2 text-center shadow rounded-5 p-1 border border-info  border-5 ">
      <div class="card-body    text-primary-emphasis ">
      <img  class="rounded mx-auto "  src=${png} style="width:100px">
<h3 style=font-size:50px;>Name: ${countryName}</h3>
<p>Region: ${region}</p>
<p>Continents: ${continents}</p>
<p>Independent: ${independent}</p>
<p>Latlng: ${latlng}</p>
<p>Status: ${status}</p>
<ul style=:text-align:center;;>
<li>
<p>Languages: ${eng}</p>
</li>
<li><p>Timezones: ${timezones}</p></li>
</li>
</ul>
<a class="text-danger" href=${googleMaps}>Country Map</a>
</div>
  </div>`;
      signleCountry.appendChild(newDiv);
    });
};
