from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image

def generate_blip_description(image_path):
    processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
    model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

    # loads the image: 
    #image = Image.open("../data/ring1.PNG")
    image = Image.open(image_path)

    # preprocesses the image: 
    inputs = processor(images=image, return_tensors="pt")

    # generates caption: 
    out = model.generate(**inputs)
    caption = processor.decode(out[0], skip_special_tokens=True)

    #print("Generated Caption:", caption)

    return caption
