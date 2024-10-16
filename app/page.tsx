import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between bg-green-500 items-center p-5">
        <div className="  text-2xl tracking-wider font-semibold text-black hover:text-white cursor-pointer"><Link href="/">Logo</Link></div>
        <div className=" flex  space-x-16">
        <div className="text-lg hover:text-green-900"><Link href="/home">Home</Link></div>
        <div className="text-lg hover:text-green-900"><Link href="/about">About</Link></div>
        <div className="text-lg hover:text-green-900"><Link href="/info">Info</Link></div>
        <div className="text-lg hover:text-green-900"><Link href="/contact">Contact</Link></div>
        </div>
      </nav>
      <br />
      <div className="flex border-4 border-white py-8 justify-evenly bg-red-400">
                <h1 className="text-center text-black font-semibold px-4">My Web Practice</h1>
            </div>
      <br />
      <div className="flex border-4 border-blue-500 py-8 justify-evenly bg-slate-400">
          <div className="py-32 px-36 rounded-3xl  bg-yellow-300">
            <h1 className="text-xl text-black font-bold  ">FlexBox-1</h1>
          </div>
          <div className="py-32 px-36 rounded-3xl bg-red-300">
          <h1 className="text-xl text-black font-bold ">FlexBox-2</h1>
          </div>
      </div>
        <br />
        <br />
        <div className="flex border-4 border-blue-500 py-8 justify-evenly bg-slate-500">
          <div className="py-32 px-36 rounded-s-full  bg-pink-400">
            <h1 className="text-xl text-black font-bold  ">Box-3</h1>
          </div>
          <div className="py-32 px-36 rounded-full bg-blue-300">
          <h1 className="text-xl text-black font-bold ">Box-4</h1>
          </div>
          <div className="py-32 rounded-r-full px-36 rounded-3xl bg-green-400">
          <h1 className="text-xl  text-black font-bold ">Box-5</h1>
          </div>
      </div>

    </div>
  );
}
