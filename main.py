from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import openai
from dotenv import load_dotenv
import os

# 加载环境变量
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI(title="AI健康助手")

class HealthQuery(BaseModel):
    query_type: str  # 查询类型：health_advice, diet_plan, exercise_plan, mental_health, sleep_analysis
    user_input: str
    user_data: Optional[dict] = None

class HealthResponse(BaseModel):
    advice: str
    recommendations: List[str]

SYSTEM_PROMPTS = {
    "health_advice": "你是一个专业的健康顾问，请根据用户的描述提供专业的健康建议。",
    "diet_plan": "你是一个营养学专家，请根据用户的情况提供合适的饮食建议。",
    "exercise_plan": "你是一个专业的健身教练，请根据用户的情况提供适合的运动计划。",
    "mental_health": "你是一个心理健康顾问，请为用户提供心理健康支持和建议。",
    "sleep_analysis": "你是一个睡眠质量专家，请分析用户的睡眠情况并提供改善建议。"
}

@app.post("/health_assistant", response_model=HealthResponse)
async def get_health_advice(query: HealthQuery):
    try:
        system_prompt = SYSTEM_PROMPTS.get(query.query_type)
        if not system_prompt:
            raise HTTPException(status_code=400, detail="不支持的查询类型")

        # 构建用户数据提示
        user_data_prompt = ""
        if query.user_data:
            user_data_prompt = f"\n用户数据：{query.user_data}"

        # 调用OpenAI API
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"{query.user_input}{user_data_prompt}"}
            ]
        )

        # 处理响应
        advice = response.choices[0].message.content
        recommendations = [
            "建议定期进行健康检查",
            "保持规律的作息时间",
            "注意均衡饮食",
            "保持适度运动"
        ]

        return HealthResponse(
            advice=advice,
            recommendations=recommendations
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "欢迎使用AI健康助手！请访问 /docs 查看API文档。"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 