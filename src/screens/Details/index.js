import React from 'react'
import DetailsView from './Details'
import NavigationService from '../../navigation/NavigationService'

export default Details = (props) => {

    const deleteLocation = (id) => {

    }

    return (
        <DetailsView
            {...props}
            deleteLocation={deleteLocation}
        />
    )
}
