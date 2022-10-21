import React, { useEffect, useState } from 'react'
import { comobibity } from '../../Config/Config';
import Left_Side_Detail from '../Left_Side_Detail';

function Comobidity() {
    const [items, setItems] = useState([])

    useEffect(() => {
        storeValues()
    }, [comobibity])
    let allValues = []
    const storeValues = () => {

        comobibity.map((item) => {
            
            allValues.push({ name: item.name, checked: false })
        })
       
        setItems(allValues)
    }
    return (
        
        <div>
            <Left_Side_Detail
            pargraph_text={"According to our data the patient might be suffering from"}
            table_header={"Suspected Diseases"}
            table_values={items}

            />
        </div>
    )
}

export default Comobidity