import { useState, useRef, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import image1 from "../../../assets/banner1.jpg";
import image2 from "../../../assets/banner2.jpg";
import image4 from "../../../assets/banner4.jpg";
import { addressAction } from "../../../redux/features/address/address";

const libraries = ["places"];

const Search = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = [image1, image2, image4];

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDV1I-VK7KrnnU78YxHp6qgmyw5CP0UwG0",
    libraries,
  });

  const autocompleteRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    if (isLoaded && searchInputRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        searchInputRef.current
      );
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.geometry) {
          dispatch(addressAction(place));
          setData(place);
          setInputValue(place.formatted_address || "");
          setError(false);
          setErrorMessage("");
        }
      });
    }
  }, [isLoaded, dispatch]);

  const handleGoClick = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      setErrorMessage("Enter address for search");
    } else if (!data || !data.geometry) {
      setError(true);
      setErrorMessage("Please enter a valid address from the suggestions");
    } else {
      setError(false);
      setErrorMessage("");
      navigate('/applicationForm');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setData(null); // Reset data when the input changes
    if (error && e.target.value.trim() !== "") {
      setError(false);
      setErrorMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents form submission
    }
  };

  const gradientStyle = {
    background: `url(${images[currentImageIndex]}), linear-gradient(to top, rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.578))`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    backgroundPosition: 'bottom',
  };

  return (
    <div>
      <div
        style={gradientStyle}
        className="bg-no-repeat bg-cover px-10 pt-56 pb-36 relative"
      >
        <h1 style={{ lineHeight: '1.2' }} className="text-2xl lg:text-4xl font-[600] uppercase text-white text-center pb-10">
          Your Trusted Partner in Property <br />
          Tax Management
        </h1>
        <p className="text-md lg:text-xl font-[400] text-white text-center pb-10 leading-tight">
          At <span className="text-red-500">Miami Property Taxes</span>, we streamline your property tax process, ensuring accuracy <br /> and peace of mind. Our expertise helps you navigate assessments, appeals, and payments with ease.
        </p>

        <div className="flex justify-center">
          <form onSubmit={handleGoClick} className="relative w-full max-w-2xl">
            <div className="flex space-x-4">
              <div className="flex flex-col justify-center lg:flex-row w-full gap-4 rounded-md overflow-hidden">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter Your Property address"
                  ref={searchInputRef}
                  className="w-full outline-none border-2 py-2 focus:border-[#39cbce] rounded-md px-5"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#9b65e7] to-[#39cbce] text-white px-6 text-lg font-semibold py-3 rounded-md"
                >
                  Search
                </button>
              </div>
            </div>
            {error && (
              <div className="absolute top-full left-0 mt-2 w-full flex">
                <div className="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1v4zm0 0h-1v-2h1v2zm0 0h-1v-1h1v1z"
                    />
                  </svg>
                  <p className="text-red-500 text-lg">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
