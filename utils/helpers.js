import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const DAILY_STORAGE_KEY = 'FlashcardsARM:daily'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(DAILY_STORAGE_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification () {
  return {
    title: 'Hey!',
    body: "👋 don't forget study!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(DAILY_STORAGE_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let newSchedule = new Date()
                newSchedule.setDate(newSchedule.getDate() + 1)
                newSchedule.setHours(20)
                newSchedule.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: newSchedule,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(true))
              }
            })
        }
      })
  try {

  } catch (err) {
    console.log(`ERROR TRYING TO SET NOTIFICATION: ${err.message}`)
  }
}