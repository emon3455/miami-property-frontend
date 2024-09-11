import React, { useState } from 'react';



const AddressSearch = () => {
  const [addresses, setAddresses] = useState([
    '10059 SW 223 ST',
    '22211 SW 99 CT'
  ]);
  const [matchedItems, setMatchedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const matched = await getData(addresses);
      setMatchedItems(matched);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-60'>
      <h1>Matched Addresses</h1>
      <button onClick={fetchData}>Get Matches</button>
      {loading && <div>Loading...</div>}
      {matchedItems.length > 0 ? (
        <ul>
          {matchedItems.map((item, index) => (
            <li key={index}>
              {item.physicalAddress} - {item.ownerName} - {item.folio}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No matches found.</p>
      )}
    </div>
  );
};

export default AddressSearch;
