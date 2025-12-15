import Game from './Game'

function Home() {
  return (
    <div>
      <div className="h-screen w-screen bg-[url('/img/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <Game />
      </div>
    </div>
  )
}

export default Home
