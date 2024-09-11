const OurMission = () => {
  const cards = [
    { subTitle: "Maximizes Your", title: "Deductions", description: "Regular updates throughout the process.", icon: "🔔" },
    { subTitle: "Enhances Your", title: "Case Continuously", description: "Continuously refine and enhance your tax case for better results.", icon: "🛠️" },
    { subTitle: "Maintains Constant", title: "Communication", description: "Regular updates throughout the process.", icon: "💡" },
    { subTitle: "View More", title: "Services", description: "Explore additional services to meet all your property tax needs.", icon: "📉" },
    // { subTitle: "Provides Strategic Insights", title: "and Expert Plans", description: "Expert analysis and strategic recommendations.", icon: "📂" },
  ];

  const gradientStyle  = {
    background: `url('https://i.ibb.co/55skbHM/10.jpg'), linear-gradient(to top, rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0))`,
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    backgroundPosition: "bottom",
  };

  return (
    <div style={gradientStyle} className="grid justify-center lg:mb-72 items-center lg:my-20">
      <div className="text-center text-white px-4 lg:px-20 lg:py-20 grid gap-3 lg:max-w-7xl my-10">
        <p className="text-center text-xl text-red-500">We Are Committed</p>
        <h1 className="text-4xl">Our Mission Statement</h1>
        <p>
          Our mission is to make property tax management straightforward and stress-free. We are dedicated to providing accurate, efficient, and reliable services tailored to your unique needs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-wrap lg:flex-row justify-between lg:-mb-32 gap-0 mb-10 lg:gap-0 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 flex-shrink-0 basis-1/5 p-4"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg text-center p-8 flex flex-col justify-between h-full">
              <div className="text-5xl mb-4">{card.icon}</div>
              <p>{card.subTitle}</p>
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
