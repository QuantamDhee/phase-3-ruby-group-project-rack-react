import React from 'react'
import CompCard from './CompCard'

const CompContainer = (props) => {

    const renderComp = () => {
        return props.comp.map()
    }
    return(
        <div id='comp-collection'>
            {props.compData.map(comp => <CompCard key={comp.id} comp={comp} />)}
        </div>
    )
}

export default CompContainer