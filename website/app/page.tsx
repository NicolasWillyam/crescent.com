import Image from "next/image";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import { IoIosArrowDown } from "react-icons/io";


export default function Home() {
  return (
    <main className="w-full  bg-[#FFF] text-[#000]">
      <Header/>
      <HomeScreen />
      <div className="py-32 text-[#000]">
        <div className="w-1/4 text-center mx-auto">
          <p className="text-[30px] font-medium">NEW COLLECTION </p>
          <p className="text-[16px] text-[#999999]">Out lastest collection, where classic and contemporay styles convererge in perfect harmony</p>
        </div>

        <div className="w-full grid grid-cols-3 mt-20 px-[60px] gap-[20px]">
          <div className="">
            <div className="h-[600px] bg-[url('https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_february/central/Women_Bags_WW_HP_Product_Push_0202_DI2.jpg?wid=730')]">
            </div>
            <p className="text-[16px] mt-8">Women's bags</p>
            <button className="text-[14px] underline underline-offset-4 mt-4">Shop the collection</button>
          </div>

          <div className="">
            <div className="h-[600px] bg-[url('https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_february/central/Women_Perfumes_WW_HP_Product_Push_V0202_DI2.jpg?wid=730')]">
            </div>
            <p className="text-[16px] mt-8">Women's bags</p>
            <button className="text-[14px] underline underline-offset-4 mt-4">Shop the collection</button>
          </div>

          <div className="">
            <div className="h-[600px] bg-[url('https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_february/central/Men_FJ_WW_HP_Product_Push_V0202_DI2.jpg?wid=730')]">
            </div>
            <p className="text-[16px] mt-8">Women's bags</p>
            <button className="text-[14px] underline underline-offset-4 mt-4">Shop the collection</button>
          </div>
        </div>
      </div>
      
      <section className="w-full h-screen relative bg-cover bg-no-repeat bg-center bg-[url('https://us.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_january/central/Men_SS24_Campaign_WW_HP_Push_V1201_DI3.jpg?wid=2400')]">
        <div className="text-[#FFF] w-full text-center bottom-[10%] absolute">
          <p className="text-[14px]">Men</p>
          <p className="text-[28px] font-medium">Sping-Summer 2024</p>
          <div className="grid grid-cols-2 w-fit mx-auto gap-4 mt-8">
            <button className="border-[1px] border-[#FFF] py-3 px-10 text-[14px] rounded-full backdrop-blur-sm bg-white/5">Explore the Collection</button>
            <button className="border-[1px] border-[#FFF] py-3 px-10 text-[14px] rounded-full backdrop-blur-sm bg-white/5">Discover the Campaign</button>
          </div>
          <div className="w-full mx-auto "><IoIosArrowDown /></div>
        </div>
      </section>
    </main>
  );
}
