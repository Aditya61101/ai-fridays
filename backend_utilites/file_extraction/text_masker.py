import re

class TextMasker:
    # NOT WORKING CORRECTLY, needs to be fixed
    DEFAULT_PATTERNS = {
        r"\b[\w\.-]+@[\w\.-]+\.\w+\b": "<EMAIL>",
        r"\b\d{10}\b": "<PHONE>",
        r"\b\d{12,16}\b": "<NUMBER>",
        r"\b[A-Za-z0-9]{8,}\b": "<TOKEN>",
        r"\b[0-9]+\.[0-9]+\b": "<DECIMAL>",
    }

    @staticmethod
    def mask_text(text: str, extra_patterns: dict = None) -> str:
        if not text:
            return ""
        patterns = TextMasker.DEFAULT_PATTERNS.copy()
        if extra_patterns:
            patterns.update(extra_patterns)

        masked = text
        for pattern, repl in patterns.items():
            masked = re.sub(pattern, repl, masked)
        return masked
