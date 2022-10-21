import React, { useEffect, useState } from 'react'
import { _tests } from '../../../actions/detailsActions';
import { tests } from '../../Config/Config';
import { data as Config } from '../../Config/base'
import Left_Side_Detail from '../Left_Side_Detail';
import { useSelector } from 'react-redux';

function Test() {

    const [items, setItems] = useState([])
    const data = useSelector(state => state.details)
    const { tests } = Config[data.use_case]

    useEffect(() => {
        storeValues()
    }, [tests])
    let allValues = []
    const storeValues = () => {

        tests.map((item) => {

            allValues.push({ name: item.name, checked: false })
        })

        setItems(allValues)
    }
    return (

        <Left_Side_Detail
            pargraph_text={"Select a test or multiple tests for your Patient"}
            table_header={"Tests"}
            table_values={items}
        />
    )
}

export default Test