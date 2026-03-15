def build_prompt(feature_name, description, audience, tone):

    prompt = f"""
You are a social media marketing expert.

Generate promotional social media content for a new product feature.

Feature Name: {feature_name}
Description: {description}
Target Audience: {audience}
Tone: {tone}

Create the following:

1. LinkedIn post (professional)
2. Instagram caption (engaging with emojis)
3. Twitter/X post (short and catchy)
4. 5 trending hashtags
5. Marketing image idea

Return the content clearly with headings.
"""

    return prompt