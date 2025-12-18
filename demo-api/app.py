from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()

class In(BaseModel):
    prompt: str = ""

@app.post("/generate")
async def generate(payload: In):
    return {"text": f"Demo response for: {payload.prompt}"}
