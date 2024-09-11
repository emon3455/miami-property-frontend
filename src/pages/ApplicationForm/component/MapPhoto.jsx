/* eslint-disable react/prop-types */
const MapPhoto = ({ address, map }) => {
    const googleMapsApiKey = "AIzaSyDV1I-VK7KrnnU78YxHp6qgmyw5CP0UwG0";

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-0 pb-[66.67%]">
                <img
                    src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${encodeURIComponent(address)}&key=${googleMapsApiKey}`}
                    alt={`Street View of ${address}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '0.5rem',
                    }}
                />
            </div>
            <div className="relative w-full h-0 pb-[66.67%]"> {/* Maintain a 3:2 aspect ratio */}
                <iframe
                    src={`${map}&output=embed`}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
        </div>
    );
};

export default MapPhoto;
