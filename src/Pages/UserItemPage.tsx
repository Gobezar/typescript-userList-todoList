import React, {FC, useState, useEffect} from 'react'
import { IUser } from '../types/types';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// interface UserItemPageParams {
//     id: string;
// }

export type UserItemPageParams = {id: string;}

const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams >();
    const navigate = useNavigate();
    
  
    useEffect(() => {
      fetchUser()
    }, [])
  
    async function fetchUser () {
      try {
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
          setUser(response.data)
      } catch(e) {
        alert(e)
      }
    }

  return (
    <div>
        <button className='my_button' style={{marginTop:'10px'}} onClick={()=> navigate("/users")}>Back</button>
        <h3>Страница пользователя {user?.name}</h3>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.city} {user?.address.street} {user?.address.zipcode}
        </div>

    </div>
  )
}
export default UserItemPage;