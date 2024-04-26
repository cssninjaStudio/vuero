/**
 * Resolve after `time` has been spend.
 *
 * @param time Time in milliseconds to wait
 */
export default function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
