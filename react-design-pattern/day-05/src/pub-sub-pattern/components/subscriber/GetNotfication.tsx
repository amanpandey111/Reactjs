import { useState } from 'react'
import useAssignmentEvent from '../../hooks/useAssignmentEvent'
import type { NotificationType } from '../../types/_practice'

const GetNotfication = () => {
  const [items, setItems] = useState<NotificationType[]>(() => {
    return JSON.parse(localStorage.getItem('notifications') ?? '[]')
  })
  console.log(items)
  useAssignmentEvent('add:notification', (data: NotificationType) => {
    // setItems((prev) => ([...prev, data]))
    const items: NotificationType[] = JSON.parse(localStorage.getItem('notifications') ?? '[]')
    items.push(data)
    setItems(items);
    localStorage.setItem('notifications', JSON.stringify(items))
  })
  return (
    <div className='w-max m-auto mt-6 px-6 py-2 border-2'>
      <p className='text-2xl font-bold'>I am Subscriber For Notification</p>
    </div>
  )
}

export default GetNotfication;
