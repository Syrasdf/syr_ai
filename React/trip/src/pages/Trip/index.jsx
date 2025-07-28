import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Input,
    Loading,
    Toast
} from 'react-vant'

import useTitle from '@/hooks/useTitle'
import {
    chat
} from '@/llm'
import styles from './trip.module.css';

const Trip = () => {
    useTitle('旅游智能客服')
    const [text, setText] = useState("");
    // 数据驱动页面
    // 静态界面
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState([
        {
            id: 1,
            text: 'hello~',
            role: 'user'
        },
        {
            id: 2,
            text: 'hello,i am your assistant~~',
            role: 'user'
        }
    ]);

    const handleChat = () => {
        if (text.trim() === "") {
            Toast.info({
                message: '内容不能为空'
            })
            return
        }
        setIsSending(true)
        setText("")
        setIsSending((prev) => {
            return [
                ...prev,
                newMessage.data
            ]
        });
        setIsSending(false)
    }
    return (
        <div className="flex flex-col h-all">
            <div className={`flex-1 ${styles.chatArea}`}>
                {
                    message.map((msg, index) => (
                        <div
                            key={index}
                            className={
                                msg.role === 'user' ?
                                    styles.userMessage :
                                    styles.assistantMessage}>
                            <div className={`flex-1 ${styles.message}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`flex ${styles.inputArea}`}>
                <Input
                    value={text}
                    onChange={(e) => setText(e)}
                    placeholder="请输入消息"
                    className={`flex-1 ${styles.input}`}
                />
                <Button disabled={isSending} type="primary" onClick={handleChat} >发送</Button>
            </div>
            {isSending && (<div className="fixed-loading"><Loading type="ball" /></div>)}
        </div>
    )
}

export default Trip