import Image from "next/image";
import CoverImage from "@/public/images/cover.png";
import Container from "../Shared/Container";

const Banner = () => {
    return (
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <Container>
                <div className="text-white flex flex-col md:flex-row items-center justify-center h-screen">
                    <div className="max-w-5xl mx-auto text-left ">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">We Are Massive Growth</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl mb-6">Helping You Grow Your Agency with Web Development Services</h2>
                        <button className="btn bg-[#00eeff] py-2 px-6 md:px-10 font-bold rounded-lg text-black mb-8">Contact Now</button>
                    </div>
                    <div className="order-0 md:order-1 mt-8 md:mt-0 md:ml-8 lg:w-[800px]">
                        <Image
                            src={CoverImage}
                            layout="responsive"
                            width={200}
                            height={200}
                            alt="Cover Image Business Development"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
