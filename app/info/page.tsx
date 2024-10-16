import Link from "next/link";
import About from "../about/page";
import myHome from "../page";
import Contact from "../contact/page";

function Info(){
    return(
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
                <h1 className="text-center text-black font-semibold px-4">Info</h1>
            </div>
            <br />
            <div className="py-20 bg-indigo-500">
                <div className=" flex pl-6 pr-6 justify-around">
                        <div className="px-36 bg-lime-700">
                            <h1 className="text-black font-bold pt-24">Insert Img</h1>
                        </div>
                        <div className="p-28  bg-amber-600"><p className="border-l-slate-100 border-l-8 pl-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Quidem delectus modi totam ea provident nulla deleniti a perferendis corrupti rem id, eveniet vel 
                             ipsum est mollitia omnis esse voluptatem.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Info;