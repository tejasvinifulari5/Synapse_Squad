def build_prompt(feature_name, description, audience, tone):

    prompt = f"""
You are a social media marketing expert.

Generate promotional content for a new product feature launch.

Feature Name: {feature_name}
Description: {description}
Target Audience: {audience}
Tone: {tone}

Generate the following:

1. LinkedIn Post (professional)
2. Instagram Caption (engaging with emojis)
3. Twitter/X Post (short and concise)
4. 5 Trending Hashtags
5. Visual Content Idea for marketing image

Return the result clearly with headings.
"""

    return prompt