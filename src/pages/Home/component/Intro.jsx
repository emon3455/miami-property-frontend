import main from "../../../assets/main.jpg"
import main1 from "../../../assets/main1.jpg"

const Intro = () => {
    return (
        <article className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between gap-10 items-center mt-20 p-6'>

            <section className="w-full lg:w-2/5">
                <h3 className='text-2xl font-light text-red-500'>Introducing</h3>
                <h1 className='text-5xl font-medium w-full'>Miami <br /> Property Taxes</h1>
                <p className='mt-10'>
                    At <span className="text-red-500">Miami Properties Taxes</span>, we bring years of expertise to ensure your property taxes are managed accurately and efficiently. Our team is here to guide you through every step, from filing to appeals, making sure you get the best results.
                </p>
                <p className='mt-5'>
                    Whether you are a homeowner or a business, we provide tailored solutions that save you time and money.
                </p>

            </section>
            <section className="relative w-full lg:w-3/5 hidden lg:block">
                <img
                src={main}
                height="200"
                width="500"
                alt="step1"
                className='ml-auto rounded-2xl'
                />
                <img
                src={main1}
                height="80"
                width="350"
                alt="step1"
                className='absolute bottom-0 left-20 rounded-2xl shadow-xl'
                />
            </section>
            
        </article>
    );
};

export default Intro;