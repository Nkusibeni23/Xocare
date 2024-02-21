/* eslint-disable no-unused-vars */
import { Country, City } from "country-state-city";
import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css"; // Import the styles
import PhoneInput from "react-phone-input-2";
import "react-phone-number-input/style.css";
export default function Individual() {
  const countryData = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCityDropdown, setSelectedCityDropdown] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCityInput, setSelectedCityInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+250");

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
    setSelectedCityDropdown("");
    setSelectedCityInput("");
  };

  const handleCityDropdownChange = (e) => {
    setSelectedCityDropdown(e.target.value);
    setSelectedCityInput(e.target.value);
  };

  const handleCityInputChange = (e) => {
    setSelectedCityInput(e.target.value);
    setSelectedCityDropdown("");
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
            type="email"
          />
          <p className=" text-sm text-gray-500 text-center">
            Your receipt will be sent to this email.Make sure to double-check
            for typos.
          </p>
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
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30 cursor-pointer"
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
          <select
            className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30 cursor-pointer"
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="relative">
              <input
                className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
                placeholder="State"
                type="text"
              />
              <span className=" absolute top-7 text-gray-500 right-5">
                Optional
              </span>
            </div>
            <div>
              <input
                className="w-full px-5 py-3 mt-4 border-2 rounded-lg placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30 "
                placeholder="Zip Code"
                type="text"
              />
            </div>
          </div>

          <PhoneInput
            className="py-3 mt-4 rounded-lg border-2 placeholder-gray-500 bg-white text-gray-800 border-gray-700 focus:border-gray-900 focus:ring-gray-900 focus:outline-none focus:ring focus:ring-opacity-30"
            defaultCountry="RW"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value)}
            inputStyle={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              borderColor: "transparent",
            }}
          />
        </div>
      </form>
    </div>
  );
}
