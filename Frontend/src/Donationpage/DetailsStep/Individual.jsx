/* eslint-disable no-unused-vars */
import { Country, City } from "country-state-city";
import { useEffect, useState } from "react";
export default function Individual() {
  const countryData = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCityDropdown, setSelectedCityDropdown] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCityInput, setSelectedCityInput] = useState("");

  useEffect(() => {
    if (selectedCountry) {
      const countryInfo = countryData.find(
        (country) => country.name === selectedCountry
      );
      if (countryInfo) {
        const countryCities = City.getCitiesOfCountry(countryInfo.isoCode);
        setCities(countryCities);
      }
    }
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCityDropdown(""); // Reset selected city for dropdown
    setSelectedCityInput(""); // Reset selected city for input
  };

  const handleCityDropdownChange = (e) => {
    setSelectedCityDropdown(e.target.value);
    setSelectedCityInput(e.target.value); // Update input value
  };

  const handleCityInputChange = (e) => {
    setSelectedCityInput(e.target.value);
    setSelectedCityDropdown(""); // Reset selected city for dropdown
  };
  return (
    <div>
      <form className="">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-base text-gray-900">
              First Name
            </label>
            <input
              className="block w-full px-5 py-3 mt-2 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div>
            <label className="block mb-2 text-base text-gray-900">
              Last name
            </label>
            <input
              className="block w-full px-5 py-3 mt-2  border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              placeholder="Last name"
              type="text"
            />
          </div>
        </div>
        <div className="mt-8">
          <span className="text-lg font-semibold">
            Let&apos;s get your details.
          </span>
          <input
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
            placeholder="Email"
            type="text"
          />
          <input
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
            placeholder="Address"
            type="text"
          />
          <div className="relative">
            <input
              className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              placeholder="Apartment,Suite, Etc"
              type="text"
            />
            <span className=" absolute top-7 text-gray-500 right-5">
              Optional
            </span>
          </div>
          <select
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
            value={selectedCountry}
            onChange={handleCountryChange}
            style={{ width: "100%" }}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countryData.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <select
              className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              value={selectedCityDropdown}
              onChange={handleCityDropdownChange}
              disabled={!selectedCountry}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              placeholder="State"
              type="text"
            />
            <input
              className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
              placeholder="Zip Code"
              type="text"
            />
          </div>

          <input
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
            placeholder="Phone"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
