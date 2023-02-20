import React, {useState, useEffect, FC} from 'react'
import axios from 'axios';
import { IUser } from '../types/types';
import List from '../Components/List';
import UserItem from '../Components/UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage:FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchPosts()
    }, [])
  
    async function fetchPosts () {
      try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(response.data)
      } catch(e) {
        alert(e)
      }
    }

  return (
    <List items={users} renderItem={(user: IUser) => 
            <UserItem 
            onClick={(user)=> navigate("/users/"+user.id)} 
            user={user} 
            key={user.id} 
            />} 
            />
  )
}

export default UsersPage;