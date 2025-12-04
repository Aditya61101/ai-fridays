from text_masker import TextMasker

class TextFileExtractor:
    def __init__(self, mask=True):
        self.mask = mask

    def extract(self, file_path: str) -> list:
        lines = []
        with open(file_path, "r", encoding="utf-8") as f:
            for line in f:
                if line.strip():
                    lines.append(line.strip())
        
        merged = "\n".join(lines)
        return TextMasker.mask_text(merged) if self.mask else merged