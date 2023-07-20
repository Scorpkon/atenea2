import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
    const { user } = useAuth0();
    const [celebrity, setCelebrity] = useState([]);

    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key
    }

    const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP + nombre;

    useEffect(
        () => {
            console.log(key);
            Axios.get(url, { headers })

                .then(resp => {
                    console.log(resp.data)
                    setCelebrity(resp.data)
                    console.log(celebrity)
                })

                .catch(error => { console.log(error) })
        }, []
    )

    return (
        <div><h3>{user.name} </h3>
            <div>
                {celebrity.map(cel => {
                    return (
                        <Fragment>
                            <h4>{cel.name} </h4>
                            <h3>{cel.age} </h3>
                        </Fragment>
                    )
                })}
            </div>

        </div>
    )

}

export default Home