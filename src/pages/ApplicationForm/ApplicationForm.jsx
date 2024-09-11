import ApplyForm from "./component/ApplyForm";

const ApplicationForm = () => {
  const gradientStyle = {
    background: `url('https://i.ibb.co/55skbHM/10.jpg'), linear-gradient(to top, rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0))`,
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    backgroundPosition: "bottom",
  };
    return (
      <div>
        <div style={gradientStyle} className='bg-gradient-to-r from-[#9b65e7] to-[#39cbce]  px-14 py-24'>
                <h1 className='text-5xl text-center font-semibold mt-24 text-white'>Get your savings started</h1>
            </div>
            <ApplyForm />
        </div>
    );
};

export default ApplicationForm;
