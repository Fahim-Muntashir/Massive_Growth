import Image from "next/image";
import CoverImage from "@/public/images/cover.png";
import Container from "../Shared/Container";

const Banner = () => {
    return (
        <div className="">
            <Container>
                <div className="text-white flex flex-col-reverse md:flex-row items-center justify-center h-screen">
                    <div className="max-w-5xl mx-auto text-left md:text-center md:order-1">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">We Are Massive Growth</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl mb-6">Helping You Grow Your Agency with Web Development Services</h2>
                        <button className="btn bg-[#00eeff] py-2 px-6 md:px-10 font-bold rounded-lg text-black mb-8">Contact Now</button>
                    </div>
                    <div className="md:order-0">
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
