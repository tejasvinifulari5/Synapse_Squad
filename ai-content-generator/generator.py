from openai import OpenAI
import os
from dotenv import load_dotenv
from prompts import build_prompt

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

def generate_social_media_content(feature_name, description, audience, tone):

    prompt = build_prompt(feature_name, description, audience, tone)

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    return response.choices[0].message.content