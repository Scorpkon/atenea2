import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Favorites = () => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)

    return (
        <Fragment>
            <div> Listado de favoritos</div>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Nacionalidad</th>
                        <th scope='col'>Edad</th>
                    </tr>
                </thead>

                <tbody>
                    {celebrities_List.map(celebrities=>{
                        return(
                            <tr>
                                <td scope='row'>{celebrities.birthday} </td>
                                <td scope='row'>{celebrities.name} </td>
                                <td scope='row'>{celebrities.nationality} </td>
                                <td scope='row'>{celebrities.age} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </Fragment>
    )
}