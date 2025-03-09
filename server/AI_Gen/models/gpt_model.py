import openai
from .config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_gpt_description(blip_description, metadata):
    prompt_1 = f"""
    Generate a product description for a jewelry piece in the following format (if no field is provided, leave blank):
    Condition: New
    Type: {metadata['type'].capitalize()}
    Material: {metadata['material'].capitalize()}
    Brand: {metadata['brand']}
    Gem: {metadata['gem'].capitalize()}
    Design: Elegant, timeless
    Details: This {metadata['type']} features a central {metadata['gem']} with intricate detailing on the band, offering a refined aesthetic.

    Example description:
    Condition: New
    Type: Ring
    Material: Gold
    Brand: Chopard
    Gem Stone: Diamond
    Design: Elegant, timeless
    Details: This ring features a central diamond with intricate detailing on the band, offering a refined aesthetic.

    BLIP generated description: {blip_description}

    Use the BLIP-generated description as inspiration and refine it to follow the format above. Ensure it fits the given jewelry details and is detailed, accurate, and matches the format structure.


    Please provide the description in the above format.
    """

    # gpt call 
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo", 
        messages=[{"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt_1}],
        max_tokens=100,
        temperature=0.2
    )

    # the enhanced description
    enhanced_description = response.choices[0].message.content.strip()

    #print("Enhanced Description:", enhanced_description)
    return enhanced_description
