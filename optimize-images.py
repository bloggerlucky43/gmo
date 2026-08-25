"""One-off asset optimizer: downscale + convert src/assets photos to WebP.

Originals are committed at d412a91 and recoverable with:
    git checkout HEAD -- src/assets/
"""

import os
import glob
from PIL import Image

# Images used as full-bleed backgrounds / hero slides need real width.
FULL_BLEED = 1920
# Images only ever shown inside a 300x250 ServiceCard.
CARD = 900

TIERS = {
    "eng.jpg": FULL_BLEED,          # carousel + CTA bg + MidPageCta bg + card
    "building.jpg": FULL_BLEED,     # midpage bg + card
    "excavator.jpg": FULL_BLEED,    # contact page bg + card
    "intmin.jpg": FULL_BLEED,       # service page hero
    "interior.jpg": FULL_BLEED,     # about section
    "home1.jpg": FULL_BLEED,        # carousel slide
    "warehouse.jpg": FULL_BLEED,    # carousel slide
    "clothing.jpg": CARD,
    "photo.jpg": CARD,
    "heavy.jpg": CARD,
    "labour.jpg": CARD,
    "num2.jpeg": CARD,
    "enginnerimage.jpeg": CARD,     # testimonial + CEO portrait
    "about1.jpg": CARD,
    "about2.jpg": CARD,
    "about3.jpg": CARD,
    "about4.jpg": CARD,
    "about5.jpg": CARD,
    "about6.jpg": CARD,
}

QUALITY = 82
SRC = "src/assets"

before_total = 0
after_total = 0
rows = []

for name, box in TIERS.items():
    path = os.path.join(SRC, name)
    if not os.path.exists(path):
        print(f"SKIP (missing): {name}")
        continue

    before = os.path.getsize(path)
    im = Image.open(path)
    ow, oh = im.size

    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")

    # thumbnail() preserves aspect ratio and never upscales, so portrait
    # sources (about2 is 3840x5760) are constrained correctly too.
    im.thumbnail((box, box), Image.LANCZOS)

    out = os.path.join(SRC, os.path.splitext(name)[0] + ".webp")
    im.save(out, "WEBP", quality=QUALITY, method=6)

    after = os.path.getsize(out)
    before_total += before
    after_total += after
    rows.append((name, before, after, ow, oh, im.width, im.height))

print(f"{'file':24} {'before':>9} {'after':>9} {'saved':>7}  dimensions")
print("-" * 78)
for name, b, a, ow, oh, nw, nh in rows:
    pct = (1 - a / b) * 100
    print(
        f"{name:24} {b/1024:8.0f}K {a/1024:8.0f}K {pct:6.1f}%  "
        f"{ow}x{oh} -> {nw}x{nh}"
    )
print("-" * 78)
print(
    f"{'TOTAL':24} {before_total/1024/1024:7.1f}M {after_total/1024/1024:7.1f}M "
    f"{(1 - after_total/before_total)*100:6.1f}%"
)
