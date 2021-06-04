import React from 'react'
import CompCard from './CompCard'

const CompContainer = (props) => {

    // const renderComp = () => {
    //     return props.comp.map()
    // }
    return(
        <div id='comp-collection'>
            {props.compData.map(comp => <CompCard comp={comp} key={comp.id} />)}
        </div>
    )
}

export default CompContainer