import React from 'react';
import UsersList from './userList';
import {USERS} from '../../constants/constants';

const Users = () => {
    return (
        <UsersList
            items={USERS}
        />
    )
}

export default Users;