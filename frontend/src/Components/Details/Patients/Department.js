import React, { useEffect, useState } from 'react'
import {  symptoms } from '../../Config/Config';
import Left_Side_Detail from '../Left_Side_Detail';

function Department() {
    const [items, setItems] = useState([])
    useEffect(() => {
        storeValues()
    }, [symptoms])
    let allValues = []
    const storeValues = () => {

        symptoms.map((item) => {

            allValues.push({ name: item.name, checked: false })
        })

        setItems(allValues)
    }
   

    return (
       
        <div>
            <Left_Side_Detail
            table_values={items}
            />
        </div>
    )
}

export default Department