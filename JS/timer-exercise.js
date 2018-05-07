function countDown(time) {
  const timer = setInterval(() => {
    time -= 1;
    if (time === 0) {
      console.log("Ring Ring Ring!!!");
      clearInterval(timer);
      return;
    }
    console.log("Timer: " + time);
  }, 1000)
}
