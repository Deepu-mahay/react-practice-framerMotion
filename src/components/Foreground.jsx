import Cards from "./Cards";

export default function Foreground() {
    const data =[
        {
        disc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
        fileSize:".9mb",
        close:"true",
        tag:{
            isOpen:"true",tagTitle:"Download Now",tagColor:"green"
        }
        }
    ]
  return (
    <>
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
        {
            data.map((item)=>{
                <Cards data={item} />

            }
            )
        }
        </div>
    </>
  )
}
