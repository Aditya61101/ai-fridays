import csv
from text_masker import TextMasker

class CSVExtractor:
    def __init__(self, mask=False):
        self.mask = mask

    def extract(self, file_path: str, max_rows=5000) -> dict:
        rows = []
        with open(file_path, "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            for i, row in enumerate(reader):
                if i > max_rows:
                    break
                rows.append(row)

        text_repr = "\n".join([",".join(r) for r in rows])
        if self.mask:
            text_repr = TextMasker.mask_text(text_repr)

        return {"raw": text_repr, "rows": rows[:max_rows]}
