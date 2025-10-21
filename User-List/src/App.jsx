
import './App.css'
import UserList from './components/UserList'
import Users from './data/Users'
function App() {

  return (
    <>
    <h1 className="bg-gray-200 flex flex-wrap justify-center items-center p-10 font-bold text-3xl">this is my User-List</h1>
      <div className="min-h-screen bg-gray-200 flex flex-wrap justify-center items-center p-10">
        <UserList  items={Users}/>
      </div>

    </>
  )
}

export default App
