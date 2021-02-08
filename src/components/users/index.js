import React from 'react';

import UsersList from './UserList';
import {USERS} from '../../constants/constants';

const Users = () => {
    return (
        <UsersList
            items={USERS}
        />
    )
}

export default Users;