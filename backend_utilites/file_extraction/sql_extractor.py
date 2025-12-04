import re
from text_masker import TextMasker

class SQLExtractor:
    def __init__(self, mask=True):
        self.mask = mask

    def extract(self, file_path: str) -> str:
        with open(file_path, "r", encoding="utf-8") as f:
            sql = f.read()

        sql = self._strip_comments(sql)

        if self.mask:
            sql = TextMasker.mask_text(sql)

        return sql

    def _strip_comments(self, sql):
        sql = re.sub(r"--.*?$", "", sql, flags=re.MULTILINE)
        sql = re.sub(r"/\*.*?\*/", "", sql, flags=re.DOTALL)
        return sql.strip()
