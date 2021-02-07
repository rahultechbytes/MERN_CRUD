import React from 'react';
import Avatar from '../../shared/Avatar';
import {Link} from 'react-router-dom';
import Card from '../../shared/Card';

import './index.css';

const UserItem = (props) => {
    return (
    <li className="user-item">
        <div>
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>
                        {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                    </h3>
                    </div>
                </Link>
            </Card>
        </div>
    </li>
    )
}

export default UserItem;