import re
import pdfplumber
# from pdf2image import convert_from_path
# import pytesseract
from text_masker import TextMasker

class PDFExtractor:
    def __init__(self, enable_ocr=False, mask=False):
        self.enable_ocr = enable_ocr
        self.mask = mask

    def clean_ocr_text(self, text: str) -> str:
        # Remove weird OCR artifacts:
        text = re.sub(r"[^a-zA-Z0-9\s.,:/#@_-]", "", text)
        text = re.sub(r"\s{2,}", " ", text)
        return text.strip()

    def extract(self, file_path: str) -> dict:
        pages_output = {}

        # Preload images for OCR
        # images = convert_from_path(file_path) if self.enable_ocr else None

        with pdfplumber.open(file_path) as pdf:
            for i, page in enumerate(pdf.pages):
                plain = page.extract_text() or ""

                # OCR fallback AND hybrid combine
                ocr_text = ""
                # if images:
                #     try:
                #         ocr_text = pytesseract.image_to_string(images[i])
                #         ocr_text = self.clean_ocr_text(ocr_text)
                #     except Exception:
                #         ocr_text = ""

                merged = (plain + "\n" + ocr_text).strip()
                merged = self._dedupe_lines(merged)

                if self.mask:
                    merged = TextMasker.mask_text(merged)

                pages_output[f"page_{i+1}"] = merged

        return pages_output

    def _dedupe_lines(self, text: str) -> str:
        lines = [ln.strip() for ln in text.split("\n") if ln.strip()]
        unique = []
        seen = set()
        for ln in lines:
            if ln not in seen:
                seen.add(ln)
                unique.append(ln)
        return "\n".join(unique)


def testing():
    pass