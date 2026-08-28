from PIL import Image
import pathlib

src = pathlib.Path(r"c:\Users\hp\Desktop\gmo\.tmp-award")
out = pathlib.Path(r"c:\Users\hp\Desktop\gmo\src\assets\award")

# (extracted scan, rotation in degrees CCW, crop as fractions L/T/R/B, output name)
JOBS = [
    ("scan-09.06-p2.jpg",    0, None,                         "iso-9001-lead-auditor.webp"),
    ("scan-09.15-p2.jpg",   90, None,                         "hse-level-3.webp"),
    ("scan-09.14-p2.jpg",    0, None,                         "hse-level-2.webp"),
    ("scan-09.16-p2.jpg",   90, None,                         "hse-level-1.webp"),
    ("scan-09.10-p2.jpg",   90, None,                         "solar-pv-installation.webp"),
    # photographed on a workbench - crop away the floor and the photographer's feet
    ("scan-09.11-p2.jpg",    0, (0.05, 0.09, 0.96, 0.82),     "cac-incorporation.webp"),
    ("scan-09.08-p2.jpg",  180, None,                          "vat-registration.webp"),
    ("scan-09.12-p2.jpg",    0, None,                          "employers-permit.webp"),
]

for name, angle, crop, dest in JOBS:
    im = Image.open(src / name).convert("RGB")
    if angle:
        im = im.rotate(angle, expand=True)
    if crop:
        w, h = im.size
        l, t, r, b = crop
        im = im.crop((int(w * l), int(h * t), int(w * r), int(h * b)))
    im.thumbnail((1400, 1400), Image.LANCZOS)
    im.save(out / dest, "WEBP", quality=80, method=6)
    print(dest, im.size, (out / dest).stat().st_size // 1024, "KB")
