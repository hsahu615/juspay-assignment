import React from 'react'
import './RightPanel.css'
import { useSelector } from 'react-redux'
import { formatNotificationTime } from '../../utils/timefromnow';

const RightPanel = () => {

  const {notifications, activities, contacts} = useSelector((state) => state.rightPanel);

  return (
    <div className='right-panel-wrapper'>
        <h5 className='right-panel-heading'>Notifications</h5>
        <div className='notifications-wrapper'>
            {notifications.map((notification) => <div>
              <div className='notification-icon'>{notification.icon}</div>
              <div>
                <p className='m-0 right-panel-description'>{notification.description}</p>
                <p className='m-0 right-panel-datetime'>{formatNotificationTime(notification.datetime)}</p>
              </div>
            </div>)}
        </div>
        <h5 className='right-panel-heading'>Activities</h5>
        <div className='activities-wrapper'>
            {activities.map((activity) => <div>
              <div className='activitiy-profile-img'><img src={activity.image} alt="Profile" /></div>
              <div>
                <p className='m-0 right-panel-description'>{activity.description}</p>
                <p className='m-0 right-panel-datetime'>{formatNotificationTime(activity.datetime)}</p>
              </div>
            </div>)}

        </div>
        <h5 className='right-panel-heading'>Contacts</h5>
        <div className='contact-wrapper'>
          {contacts.map((contact) => <div>
                <div className='activitiy-profile-img'><img src={contact.image} alt="Profile" /></div>
                <div>
                  <p className='m-0 right-panel-description'>{contact.name}</p>
                </div>
              </div>)}
        </div>
    </div>
  )
}

export default RightPanel