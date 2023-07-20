import { useAuth0 } from '@auth0/auth0-react'
import React  from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

const Home =()=>{
    const {user, isAuthenticated, isLoading}= useAuth0();

    const key= 'gD0glGUqHQf2Ji3O0pO1zQ==yaPybngLFO0DTEeJ';
    const headers={
        'X-Api-Key' : key
    }

    const nombre ='Michael Jordan';
      const url= 'https://api.api-ninjas.com/v1/celebrity?name='+nombre;

    useEffect(
        ()=>{
            Axios.get(url, {headers})

            .then(resp=>{console.log(resp.data)})

            .catch(error=>{console.log(error)})
        },[]
    )

/*    if(isLoading){
        return (<div>Cargando...</div>)
    }
    
        return(
    
            isAuthenticated && (
            <div>
                 
                 <h2>{user.name} </h2>
                 <p>Correo electronico:{user.email} </p>
            </div>
            )
        )*/
}

export default Home