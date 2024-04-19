import { useRef } from "react";
import Cards from "./Cards";

export default function Foreground() {
    const ref =useRef()
    const data =[
        {
        desc:"this is description text for card description.",
        fileSize:".9mb",
        close: false,
        tag:{
            isOpen:true,tagTitle:"Download Now",tagColor:"green"
        }
        },
        {
            desc:"this is description text for card description.",
            fileSize:".9mb",
            close: true,
            tag:{
                isOpen:false,tagTitle:"Download Now",tagColor:"green"
            }
            },
            {
                desc:"this is description text for card description.",
                fileSize:".9mb",
                close: false,
                tag:{
                    isOpen:true,tagTitle:"Upload",tagColor:"blue"
                }
                }
    ]
  return (
    <>
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {
            data.map((item)=>(
                    // eslint-disable-next-line react/jsx-key
                    <Cards data={item} reference={ref}/>  
                )
            )
        }
        </div>
    </>
  )
}
