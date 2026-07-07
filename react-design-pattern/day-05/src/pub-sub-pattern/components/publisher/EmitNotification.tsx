import assignmentEventBus from "../../lib/assignmentEventBus";
import type { NotificationType } from "../../types/_practice"

const randomNotification: NotificationType[] = [
  {
    id: Date.now() + 1,
    type: 'Alert',
    description: 'Your leave request has been approved by your reporting manager.',
  },
  {
    id: Date.now() + 2,
    type: 'Alert',
    description: 'Your attendance for today has not been marked. Please punch in.',
  },
  {
    id: Date.now() + 3,
    type: 'Alert',
    description: 'Your timesheet for this week is pending submission.',
  },
  {
    id: Date.now() + 4,
    type: 'Alert',
    description: 'A new project has been assigned to you.',
  },
  {
    id: Date.now() + 5,
    type: 'Alert',
    description: 'Your assignment has been reviewed and requires revision.',
  },
  {
    id: Date.now() + 6,
    type: 'Alert',
    description: 'Your reimbursement request has been approved.',
  },
  {
    id: Date.now() + 7,
    type: 'Alert',
    description: 'A company holiday has been added to the holiday calendar.',
  },
  {
    id: Date.now() + 8,
    type: 'Alert',
    description: 'Your profile information has been updated successfully.',
  },
  {
    id: Date.now() + 9,
    type: 'Alert',
    description: 'A new company announcement has been published.',
  },
  {
    id: Date.now() + 10,
    type: 'Alert',
    description: 'Your monthly attendance report is now available.',
  },
];

const EmitNotification = () => {
  const handleEmitNotification = () => {
    const rIndex = Math.floor(Math.random() * randomNotification.length)
    const selectedNotification = randomNotification[rIndex];
    assignmentEventBus.publisher('add:notification', selectedNotification)
  }
  return (
    <div
      className="w-max border-2 px-6 py-2 m-auto mt-3"
    >
      <h2 className="font-bold text-2xl">Let's Publish The Notification</h2>
      <button
        className="border px-3 py-1 rounded-2xl bg-amber-900 text-white font-bold cursor-pointer"
        onClick={handleEmitNotification}
      >Publish it</button>
    </div>
  )
}

export default EmitNotification