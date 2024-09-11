import step1 from "../../../assets/step1.png"
import step2 from "../../../assets/step2.png"
import step3 from "../../../assets/step3.png"
import step4 from "../../../assets/step4.png"

const Steps = () => {
  return (
    <section className='max-w-7xl mx-auto w-full mt-10 bg-white p-6 '>
      <h3 className='text-center font-semibold text-xl text-red-500'>Simple Steps to Manage Your Property Taxes</h3>
      <h1 className='text-center font-semibold text-5xl'>How It Works</h1>
      <article className='flex border-dashed border-r-2 border-b-2 border-[#39cbce] flex-col-reverse lg:flex-row justify-between items-center p-10 gap-10'>
        <div className="w-full lg:w-2/3">
            <img
              src={step1}
              height="100"
              width="400"
              alt="step1"
              className='mr-auto'
            />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-light text-red-500'>Step 1</h1>
            <p className='text-4xl font-medium'>Submit Your Information</p>
            <p className='text-gray-500'>Provide your property details and tax documents through our secure portal. We confirm receipt and ensure all required information is complete.</p>
        </div>
      </article>
      <article className='flex flex-col border-dashed border-l-2 border-b-2 border-[#39cbce] lg:flex-row justify-between items-center p-10 gap-10'>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-light text-red-500'>Step 2</h1>
            <p className='text-4xl font-medium'>Review and Analysis</p>
            <p className='text-gray-500'>Our team assesses your tax situation for accuracy and savings opportunities. Receive a detailed review and recommendations for your property taxes.</p>
        </div>
        <div className="w-full lg:w-2/3">
            <img
              src={step2}
              height="100"
              width="400"
              alt="step2"
              className='ml-auto'
            />
        </div>
      </article>
      <article className='border-dashed border-r-2 border-b-2 p-10 border-[#39cbce] flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
        <div className="w-full lg:w-1/2">
            <img
              src={step3}
              height="100"
              width="400"
              alt="step3"
              className='mr-auto'
            />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-light text-red-500'>Step 3</h1>
            <p className='text-4xl font-medium'>File Your Taxes</p>
            <p className='text-gray-500'>We make the filing of taxes easy. Our experts ensure accuracy and compliance and maximize your deductions for the best financial outcome.</p>
        </div>
      </article>
      <article className='border-dashed border-l-2 border-b-2 p-10 border-[#39cbce] flex flex-col lg:flex-row justify-between items-center  gap-10'>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-light text-red-500'>Step 4</h1>
            <p className='text-4xl font-medium'>Receive Updates</p>
            <p className='text-gray-500'>Stay informed with regular updates on your tax filing status. Get support for any follow-up actions and enjoy peace of mind.</p>
        </div>
        <div className="w-full lg:w-1/2">
            <img
              src={step4}
              height="100"
              width="400"
              alt="step4"
              className='ml-auto'
            />
        </div>
      </article>
    </section>
  )
}

export default Steps
