import React from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/cellSlices';

const Celebrities_List = ({ celebrities }) => {
       const dispatch=useDispatch();
       const {celebrities_List}= useSelector(state =>state.cel)
       
       function handleAdd(celid){
             const celebrity= celebrities.find(celebrities => celebrities.birthday === celid);
             if (celebrities_List.find(celebrities=>celebrities.birthday === celid)) {
                dispatch(removeCel(celid));
             }else{
                
                dispatch(setCel(celebrity));
             }
             console.log(celebrity)
       }


    return (
        <div>

            <div>Celebrities_List</div>


            <div>
                {celebrities.map(celebrities => {
                    return (
                        <div>
                            <h4>{celebrities.name} </h4>
                            <h3>{celebrities.age} </h3>
                            <button onClick={()=>handleAdd (celebrities.birthday)}
                            >Agregar a favoritos</button>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
export default Celebrities_List