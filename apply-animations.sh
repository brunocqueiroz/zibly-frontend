#!/bin/bash

# This script applies the animation pattern from consultants page to all remaining solution pages

echo "Applying animations to remaining solution pages..."

# Note: investment-banking and private-equity are already complete

# The remaining pages that need updates are listed below
# We will need to manually edit each one following the pattern from consultants page

echo "Pages to update:"
echo "1. strategy"
echo "2. marketing"
echo "3. product-managers"
echo "4. accountants"
echo "5. attorneys"
echo "6. mba-students"
echo "7. law-students"
echo "8. undergraduates"

echo ""
echo "Animation pattern to apply:"
echo "- Add imports for animations"
echo "- Wrap h1 with SlideUp and add GradientText"
echo "- Wrap hero p with FadeIn delay={0.2}"
echo "- Wrap hero buttons with FadeIn and MagneticButton"
echo "- Add WaveDivider after hero"
echo "- Wrap section h2s with SlideUp and add GradientText"
echo "- Wrap grids with StaggerContainer and items with StaggerItem"
echo "- Add WaveDivider between sections"
echo "- Wrap CTA h2 with SlideUp and GradientText"
echo "- Wrap CTA paragraph and buttons with FadeIn"

echo ""
echo "Please run the manual edits for each file"
