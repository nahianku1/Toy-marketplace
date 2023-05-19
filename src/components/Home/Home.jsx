import Gallery from "../Gallery/Gallery"
import Homebanner from "../Homebanner/Homebanner"
import TabView from "../TabView/TabView"

function Home() {
  return (
    <main className="min-h-screen ">
      <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <Homebanner />
      <Gallery/>
      <TabView/>
      
    </main>
  )
}

export default Home