#!/usr/bin/env python3
"""사진을 약 1MB 이하로 리사이즈/압축. 원본은 ~/midnight-navy-original-images 에 백업됨."""
import os
from io import BytesIO
from PIL import Image, ImageOps

TARGET_BYTES = 1_000_000     # 약 1MB
MAX_DIM = 2048               # 최대 가로/세로 픽셀
MIN_QUALITY = 70             # 화질 하한
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images")


def encode(img, quality):
    buf = BytesIO()
    img.save(buf, format="JPEG", quality=quality, optimize=True, progressive=True)
    return buf.getvalue()


def optimize(path):
    orig = os.path.getsize(path)
    img = Image.open(path)
    img = ImageOps.exif_transpose(img)        # 회전 정보 반영
    if img.mode != "RGB":
        img = img.convert("RGB")

    # 1) 최대 치수로 다운스케일
    if max(img.size) > MAX_DIM:
        img.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)

    # 2) 품질을 낮춰가며 1MB 이하 맞추기 (95 -> 70)
    best = None
    for q in range(95, MIN_QUALITY - 1, -5):
        data = encode(img, q)
        best = data
        if len(data) <= TARGET_BYTES:
            break

    # 3) q70에서도 1MB 초과면 치수를 점점 줄임
    while best and len(best) > TARGET_BYTES and max(img.size) > 1000:
        w, h = img.size
        img = img.resize((int(w * 0.85), int(h * 0.85)), Image.LANCZOS)
        best = encode(img, MIN_QUALITY)

    with open(path, "wb") as f:
        f.write(best)
    print(f"  {os.path.relpath(path, ROOT):24s} {orig/1e6:6.2f}MB -> {len(best)/1e6:5.2f}MB  {img.size}")


def main():
    total_before = total_after = 0
    for dirpath, _, files in os.walk(ROOT):
        for name in sorted(files):
            if name.lower().endswith((".jpg", ".jpeg", ".png")):
                p = os.path.join(dirpath, name)
                total_before += os.path.getsize(p)
                optimize(p)
                total_after += os.path.getsize(p)
    print(f"\n총합: {total_before/1e6:.1f}MB -> {total_after/1e6:.1f}MB")


if __name__ == "__main__":
    main()
