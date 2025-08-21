// 常考面试题
const sleep = ms => new Promise(r => setTime(r,ms))

async function trafficLight() {
  const seq = [
    {color: 'red', ms: 3000},
    {color: 'yellow', ms: 1000},
    {color: 'green', ms: 3000}
  ]

  while(true) {
    for (const{color,ms} of seq) {
      console.log(color);
      await sleep(ms);
    }
  }
}