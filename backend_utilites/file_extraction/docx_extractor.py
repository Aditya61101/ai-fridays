from docx import Document
from text_masker import TextMasker

class DOCXExtractor:
    def __init__(self, mask=False):
        self.mask = mask

    def extract(self, file_path: str) -> list:
        doc = Document(file_path)
        content = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        merged = "\n".join(content)
        return TextMasker.mask_text(merged) if self.mask else merged