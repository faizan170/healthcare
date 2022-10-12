import React from 'react'
import Left_Side_Detail from '../Left_Side_Detail'
import Right_Side_Detail from '../Right_Side_Detail'

function Patients() {
    return (
        <Left_Side_Detail
            firstText={"Select a Patient"}
            secondText={"PATIENT ID"}
            dropDownIcon={"bxs:user"}
            dropDownText={"Place Holder"}
        />
    )
}

export default Patients