import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    return(
        <div className="section">
            <ul className="collection with-header">
                <li className="collection-header"><h6>Notifications</h6></li>
                {
                    notifications && notifications.map(notification => {
                        return (
                            <li className="collection-item" key={notification.id}>
                                <span className="red-text">{ notification.user } </span>
                                <span>{ notification.content }</span>
                                <p className="grey-text" style={{margin: 0}}>{ moment(notification.time.toDate()).fromNow() }</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Notifications;