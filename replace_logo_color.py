#!/usr/bin/env python3
"""
Replace all non-white, non-transparent colors in a PNG with a specific color.
Usage: python replace_logo_color.py input.png output.png
"""

from PIL import Image
import sys

def replace_colors(input_path, output_path, new_color=(45, 134, 74)):
    """
    Replace all colored pixels (non-white, non-transparent) with new_color.

    Args:
        input_path: Path to input PNG file
        output_path: Path to output PNG file
        new_color: RGB tuple for the new color (default: #2D864A)
    """
    # Open the image
    img = Image.open(input_path)

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Get pixel data
    pixels = img.load()
    width, height = img.size

    # Process each pixel
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            # Skip if pixel is transparent (alpha < 10)
            if a < 10:
                continue

            # Skip if pixel is white or very close to white
            if r > 250 and g > 250 and b > 250:
                continue

            # Replace any other color with the new color, preserving alpha
            pixels[x, y] = (new_color[0], new_color[1], new_color[2], a)

    # Save the result
    img.save(output_path, 'PNG')
    print(f"✓ Saved to {output_path}")
    print(f"  Replaced colors with RGB{new_color} (#{new_color[0]:02x}{new_color[1]:02x}{new_color[2]:02x})")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python replace_logo_color.py input.png output.png")
        print("Example: python replace_logo_color.py public/logo.png public/logo_new.png")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    # The forest green color: #2D864A
    forest_green = (45, 134, 74)

    replace_colors(input_file, output_file, forest_green)
