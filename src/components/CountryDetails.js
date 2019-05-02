import { Link, useParams } from "react-router-dom";

// Displays information for a single country based on the URL parameter.
function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const country = countries.find((c) => c.alpha3Code === countryId);

  if (!country) {
    return <p className="col-7">Select a country</p>;
  }

  const findCountry = (code) => countries.find((c) => c.alpha3Code === code);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital ? country.capital[0] : ""}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((borderCode) => {
                  const borderCountry = findCountry(borderCode);
                  return (
                    <li key={borderCode}>
                      <Link to={`/${borderCode}`}>
                        {borderCountry ? borderCountry.name.common : borderCode}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
