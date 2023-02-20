import {Routes, Route} from 'react-router-dom'
import UsersPage from './Pages/UsersPage';
import TodosPage from './Pages/TodosPage';
import Navigation from './Components/Navigation';
import UserItemPage from './Pages/UserItemPage';
import TodosItemPage from './Pages/TodosItemPage';

const App = () => {

 

  return (
    <>
      <Navigation />
      <Routes>
      <Route path='/users' element={<UsersPage />}/>
          <Route path='/' element={<UsersPage />}/>
          <Route path='*' element={<UsersPage />}/>
      <Route path="/users/:id" element={<UserItemPage/>}/>
      <Route path='/todos' element={<TodosPage />}/>
      <Route path="/todos/:id" element={<TodosItemPage/>}/>
    </Routes>
      </>
  )
}

export default App;