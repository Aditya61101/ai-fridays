import ast
from text_masker import TextMasker

class CodeExtractor:
    def __init__(self, mask=False):
        self.mask = mask

    def extract(self, file_path: str) -> dict:
        with open(file_path, "r") as f:
            code = f.read()

        functions = self._extract_functions(code)
        classes = self._extract_classes(code)

        if self.mask:
            code = TextMasker.mask_text(code)

        return {
            "raw": code,
            "functions": functions,
            "classes": classes
        }

    def _extract_functions(self, code):
        tree = ast.parse(code)
        funcs = {}
        for node in tree.body:
            if isinstance(node, ast.FunctionDef):
                funcs[node.name] = ast.get_source_segment(code, node)
        return funcs

    def _extract_classes(self, code):
        tree = ast.parse(code)
        classes = {}
        for node in tree.body:
            if isinstance(node, ast.ClassDef):
                classes[node.name] = ast.get_source_segment(code, node)
        return classes