from .models.blip_model import generate_blip_description
from .models.gpt_model import generate_gpt_description

def generate_description(image_path, metadata):
    # blip: 
    blip_description = generate_blip_description(image_path)
    # gpt: 
    # TODO: don't forget to uncomment this!!!!!

    enhanced_description = generate_gpt_description(blip_description , metadata)
    #enhanced_description = blip_description

    return enhanced_description
