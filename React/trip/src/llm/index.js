/**
 *  chat 聊天
 *
 * 
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions'

export const chat = async (
    messages,
    api_url = DEEPSEEK_CHAT_API_URL,
    api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
    model = 'deepseek-chat'
) => {
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify({
                model,
                messages,
                stream: false,
            })
        })
        const data = await response.json();
        return {
            code: 0,
            content: data.choices[0].message.content,
            role: data.choices[0].message.role
        }
    } catch (err) {
        return {
            code: 0,
            msg: '出错了...'
        }
    }
}

export const generateAvatar = async (text) => {
    // 设计prompt
    const prompt = `
    你是一个专业的头像生成器，你的任务是根据用户的描述生成一个头像。
    用户描述：${text}
    头像：
    `
}