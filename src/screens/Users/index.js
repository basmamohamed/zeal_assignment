import React from 'react'
import UsersView from './Users'
import NavigationService from '../../navigation/NavigationService'

export default Users = (props) => {

    const deleteId = (id)=>{

    }

    return (
        <UsersView
            {...props}
            delete={deleteId}
        />
    )
}
