import Link from "next/link";
import Image from "next/image";

function Pagetop() {
    return (
        <div className="flex w-full justify-around min-h-[82vh] mt-15 mx-5 ">
            <div className="text-6xl text-emerald-200 font-stretch-extra-condensed w-90">
                Generate The Profile You Desire With The Help Of AI
                <div className="mt-7 text-xl">
                    <Link href="/Create">
                        <div className="aura hover-3d ">
                            <figure className="rounded-xl">

                                <button className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-emerald-200 font-bold py-2 px-4 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <span className="">Get Started →</span>
                                </button>
                            </figure>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="text-emerald-200 text-4xl mt-5">
                    <span className="text-rotate">
                        <span className="justify-items-center">
                            <span>Create Beautiful Designs</span>
                            <span>Create Modern Designs</span>
                            <span>Create Interactive Designs</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="">
                <div className="hover-3d">
                    <figure className=" rounded-xl">
                        <Image src="/Code.png" alt="Card image" width={600} height={700} />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Pagetop
