import { formatDistanceToNow, isToday, format } from "date-fns"

export function formatNotificationTime(dateString) {
  const date = new Date(dateString)

  if (isToday(date)) {
    const diff = formatDistanceToNow(date, { addSuffix: true })
    if (diff.includes("seconds") || diff.includes("minute") || diff.includes("hour")) {
      return diff.replace("about ", "")
    }
    return `Today, ${format(date, "hh:mm a")}`
  }

  return format(date, "dd/MM/yyyy hh:mm a")
}