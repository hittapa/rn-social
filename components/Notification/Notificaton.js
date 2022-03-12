import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNotificationData } from '../../src/Redux/Action';
import AuthService from '../../src/Services/API/AuthService';
import NotificationPopupModal from '../Modals/NotificationPopupModal/NotificationPopupModal';


const Notification = ({ navigation }) => {
    let dispatch = useDispatch();
    const [notificationArray, setNotificationArray] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            getNotification()
        }, 10000);
        return () => clearInterval(interval)
    }, []);

    const getNotification = async () => {
        await AuthService.Notifiaction()
            .then(async (response) => {
                if (response.status_code === 200) {
                    if (response?.data?.length > 0) {
                        let isNotSeenArray = []
                        let notification = response.data
                        for (let i = 0; i < notification.length; i++) {
                            const notificatoinId = notification[i].id;
                            const isSeen = notification[i].is_seen;
                            if (isSeen === 0) {
                                notification[i].isVisible = true
                                isNotSeenArray.push(notification[i])
                                await AuthService.NotifiactionSeenUnseen(notificatoinId)
                            }
                        }
                        setNotificationArray(isNotSeenArray)
                        dispatch(getNotificationData(notification))
                    }
                }
            })
            .catch((err) => {
                if (err.message) {
                    toast.show(err.message, {
                        type: "danger",
                        duration: 3000,
                        placement: 'top'
                    });
                } else {
                    toast.show("Something went wrong, Please try again.", {
                        type: "danger",
                        duration: 3000,
                        placement: 'top'
                    });
                }
            })
    }



    return (
        <>
            {notificationArray.map((item, index) => {
                return <NotificationPopupModal key={index} navigation={navigation} visible={item.isVisible} popupDetail={{ notification_type: item.notification_type, id: item.id, message: item.message, sender_image: item.sender_image, sender_name: item.sender_name }} />
            })
            }
        </>
    );
}

export default Notification;
