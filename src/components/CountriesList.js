import { Link } from "react-router-dom";

// Helper to convert an alpha-2 country code to its flag emoji.
function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");
}

// Renders the scrollable list of country links.
function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            {getFlagEmoji(country.alpha2Code)} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
