const source = new EventSource("/events");

source.onmessage = () => {
    console.log("Reload")
};
