import Image from "next/image"
import hero from "@/app/public/hero.png"

export default function Checkout(){
    return(
        <div className="m-[200px] mt-0">
            <Image src={hero} alt="member-checkout"/>
        </div>
    )
}