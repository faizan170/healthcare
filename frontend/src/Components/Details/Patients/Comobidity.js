import React, { useEffect, useState } from 'react'
// import { comobibity } from '../../Config/Config';
import Left_Side_Detail from '../Left_Side_Detail';
import { data as Config } from '../../Config/base'
import { useSelector } from 'react-redux';

function Comobidity() {
    const [items, setItems] = useState([])
    const data = useSelector(state => state.details)
    const {suspected_diseases}=Config[data.use_case]
    useEffect(() => {
        storeValues()
    }, [suspected_diseases])
    let allValues = []
    const storeValues = () => {

        suspected_diseases.map((item) => {
            
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