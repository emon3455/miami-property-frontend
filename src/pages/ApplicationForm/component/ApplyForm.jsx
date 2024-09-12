/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MapPhoto from "./MapPhoto";
import { errorAlert, successAlert } from "../../../utils/allertFunction";
import CButton from "../../../utils/CButton/CButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const libraries = ["places"];

const ApplyForm = () => {
  const [loading, setLoading] = useState(false);
  const addressInfo = useSelector((state) => state.addressSlice.addressInfo);
  const [propertyFields, setPropertyFields] = useState([
    addressInfo?.formatted_address || "",
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [email, setEmail] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [sendTextUpdates, setSendTextUpdates] = useState(false);
  const [autocompleteInstances, setAutocompleteInstances] = useState([]);

  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDV1I-VK7KrnnU78YxHp6qgmyw5CP0UwG0",
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      const newInstances = propertyFields
        .map((_, index) => {
          const input = document.getElementById(`property-address-${index}`);
          if (input && window.google) {
            const autocomplete = new window.google.maps.places.Autocomplete(
              input
            );
            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();
              if (place && place.formatted_address) {
                const updatedFields = [...propertyFields];
                updatedFields[index] = place.formatted_address;
                setPropertyFields(updatedFields);
              }
            });
            return autocomplete;
          }
          return null;
        })
        .filter((instance) => instance !== null);

      setAutocompleteInstances(newInstances);
    }
  }, [isLoaded, propertyFields]);

  const addPropertyField = () => {
    setPropertyFields([...propertyFields, ""]);
  };

  const handlePropertyChange = (index, value) => {
    const fields = [...propertyFields];
    fields[index] = value;
    setPropertyFields(fields);
  };

  const removePropertyField = (index) => {
    const fields = [...propertyFields];
    fields.splice(index, 1);
    setPropertyFields(fields);
  };

  const handleClearFields = (e) => {
    e.preventDefault();
    setPropertyFields([addressInfo?.formatted_address || ""]);
    setFirstName("");
    setLastName("");
    setMobilePhone("");
    setAlternatePhone("");
    setEmail("");
    setPinCode("");
    setSendTextUpdates(false);
  };

  const handleFindAddress = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const convertProperty = (address) => {
    const add = address.toUpperCase();
    const trimmedAddress = add.split(",")[0].trim();
    const convertedAddress = trimmedAddress.replace(/\d+(TH|RD|ND)/g, (match) =>
      match.slice(0, -2)
    );
    return convertedAddress;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProperty = propertyFields.map(convertProperty);

    const propertyFieldsData = propertyFields.reduce((acc, address, index) => {
      acc[`propertyField${index + 1}`] = address;
      return acc;
    }, {});

    try {
      const response = await fetch("https://miami-property-backend.vercel.app/findAddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: updatedProperty }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();

      const matchedItemsData = results.reduce((acc, item, index) => {
        acc[`informationPhysicalAddress${index + 1}`] = item.matchedItem
          ? item.matchedItem.physicalAddress
          : "";
        acc[`informationOwnerName${index + 1}`] = item.matchedItem
          ? item.matchedItem.ownerName
          : "";
        acc[`informationParcelID${index + 1}`] = item.matchedItem
          ? item.matchedItem.parcelID
          : "";
        return acc;
      }, {});

      const formData = {
        firstName,
        lastName,
        mobilePhone,
        alternatePhone,
        email,
        pinCode,
        sendTextUpdates,
        ...propertyFieldsData,
        ...matchedItemsData,
      };

      const response1 = await fetch(
        "https://services.leadconnectorhq.com/hooks/Hl1CNBmuHQSHveigtUSl/webhook-trigger/99fe8983-6b13-4ed1-a6c6-42134c69e582",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response1.ok) {
        successAlert({
          title: "Form Submitted Successfully!",
          text: "We have sent you necessary Agreement to sign. Please check your Email inbox or spam, Thank you.",
          timer: 12000,
        });
      }
    } catch (error) {
      console.log(error);
      errorAlert({
        title: "Form submission failed!",
        text: "Something went wrong! Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Application</h2>
      <div className="w-16 h-1 bg-blue-400 mt-2 mb-6"></div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input
              required
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
            <input
              required
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
            <input
              required
              type="number"
              placeholder="Mobile Phone*"
              value={mobilePhone}
              onChange={(e) => setMobilePhone(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={sendTextUpdates}
                onChange={(e) => setSendTextUpdates(e.target.checked)}
                className="w-4 h-4"
              />
              <label>Send me text updates.</label>
            </div>
            <input
              type="number"
              placeholder="Alternate Phone (Optional)"
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
            <input
              required
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
            <input
              type="text"
              placeholder="PIN Code (Optional)"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
            />
          </div>

          <div className="space-y-4">
            {propertyFields.map((property, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <input
                  required
                  id={`property-address-${index}`}
                  type="text"
                  placeholder="Enter Your Property Address"
                  value={property}
                  onChange={(e) => handlePropertyChange(index, e.target.value)}
                  className="w-full outline-none border-2 focus:border-[#39cbce] rounded-md py-3 px-5"
                />
                {index === propertyFields.length - 1 && (
                  <button
                    type="button"
                    onClick={addPropertyField}
                    className="bg-gradient-to-r from-[#9b65e7] to-[#39cbce] text-white px-6 font-semibold py-3 rounded-md"
                  >
                    + Add Another Property
                  </button>
                )}
                {propertyFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePropertyField(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {addressInfo && (
          <MapPhoto
            address={addressInfo.formatted_address}
            map={addressInfo.url}
          />
        )}

        <div className="flex mt-4 space-x-4">
          <CButton
            variant="solid"
            type="submit"
            className="bg-gradient-to-r from-[#9b65e7] to-[#39cbce] text-white px-6 font-semibold lg:py-2 rounded-lg"
            fontSize="text-lg"
            loading={loading}
          >
            Submit
          </CButton>
          <button
            onClick={handleClearFields}
            className="bg-gray-500 text-white px-4 font-semibold lg:py-2 rounded-sm"
          >
            Clear Fields
          </button>
          <button
            onClick={handleFindAddress}
            className="bg-blue-500 text-white px-6 lg:font-semibold lg:py-2 rounded-sm"
          >
            Cannot find my address?
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
