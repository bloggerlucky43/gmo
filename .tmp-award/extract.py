import re, sys, pathlib

src = pathlib.Path(r"c:\Users\hp\Desktop\gmo\src\assets\award")
out = pathlib.Path(r"c:\Users\hp\Desktop\gmo\.tmp-award")
out.mkdir(exist_ok=True)

# CamScanner embeds one DCTDecode (JPEG) XObject per page. /Length is an indirect
# ref in these files, so take the stream body up to its "endstream" keyword.
obj_re = re.compile(rb"<<(?P<dict>[^<>]*(?:<<[^>]*>>[^<>]*)*)>>\s*stream\r?\n", re.S)

for pdf in sorted(src.glob("*.pdf")):
    data = pdf.read_bytes()
    n = 0
    for m in obj_re.finditer(data):
        if b"DCTDecode" not in m.group("dict"):
            continue
        start = m.end()
        end = data.find(b"endstream", start)
        if end == -1:
            continue
        blob = data[start:end].rstrip(b"\r\n")
        if not blob.startswith(b"\xff\xd8"):
            continue
        n += 1
        stem = pdf.stem.replace("CamScanner 08-27-2026 ", "scan-")
        name = f"{stem}-p{n}.jpg"
        (out / name).write_bytes(blob)
        print(name, len(blob), "bytes")
    if n == 0:
        print(pdf.name, "-> NO JPEG FOUND", file=sys.stderr)
