import './App.css'
import { MyButton2 } from './components/eventHandling/MyButton2'
import Page from './components/conditionalRendering/Page'
import Profile from './components/Profile'
import ShoppingList from './components/renderingList/ShoppingList'
import ShoppingList2 from './components/renderingList/ShoppingList2'
import MyApp from './components/hooks/MyApp'
import MyApp2 from './components/hooks/MyApp2'
function MyButton(){
  return (
    <button>I'm a button</button>
  )
}

function AboutPage(){
  return (
    <>
      <div className='bg-gray-600 p-10 mt-10 rounded-2xl'>
      <h1 className='text-4xl'>About</h1><hr />
      <p>Hello there. <br />How do you do?</p>
    </div>
    </>
  )
}

function App() {
  

  return (
    <div className='h-screen bg-amber-500'>
      <div className='p-20 text-2xl'>
        <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>
      <Profile/>
      <Page/>
      <ShoppingList/>
      <ShoppingList2/>
      <MyButton2/>
      <MyButton2/>
      <MyApp/>
      <MyApp2/>
      </div>
    </div>
  )
}

export default App
