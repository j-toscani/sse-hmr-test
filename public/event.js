var source = new EventSource("/events")

source.addEventListener(
  "message",
  () => {
    location.reload()
  }
)