import { useState, useRef } from 'react'
import './App.css'

function App() {
  const TOKEN = '';
  const APP_ID = '';
  const Cluster_ID = '';// 集群 ID

  // 代码的可读性高于一切
  const [prompt, setPrompt] = useState('大家好，我是黄新天')// 响应式数据
  const KEY = 'VUxaH9KVZw1MHatS5WXVZw7Y80kAeEKY'
  // react use 开头 ref hook 可以获取 DOM 元素
  const audioPlayer = useRef(null)
  console.log(audioPlayer, '////');
  const playMusic = () => {
   // console.log(audioPlayer, '+++');
    console.log('play music');
    audioPlayer.current.play();
  }

  const generateAudio = () =>{
    // 女性
    const voiceName = 'zh_female_shuangkuaisisi_moon_bigtts'
    const voiceName2 = 'zh_male_sunwukong_mars_bigtts'
    const endpoint = "/tts/api/v1/tts"// tts api llm 服务接口地址
    

    const headers = {
      "Content-Type": "application/json", //  
      "Authorization": `Bearer ${TOKEN}`, // 请求头
      "X-App-Id": APP_ID,
      "X-Cluster-Id": Cluster_ID,
    } 
  }
  }
  return (
    <div className="container">
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>生成并播放</button>
        <textarea
        className="input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        >

        </textarea>
      </div>
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      {/* <button onClick={playMusic}>播放</button> */}
    </div>
  )

}

export default App