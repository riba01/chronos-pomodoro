let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;

  const { activeTask, secondsRemaining } = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  /* console.log(new Date(endDate)); */
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function timer() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);
    setTimeout(timer, 1000);
  }
  timer();
};
