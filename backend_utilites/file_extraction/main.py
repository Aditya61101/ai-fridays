import os
from code_extractor import CodeExtractor
from pdf_extractor import PDFExtractor
from docx_extractor import DOCXExtractor
from csv_extractor import CSVExtractor
from sql_extractor import SQLExtractor
from text_file_extractor import TextFileExtractor

from sql_parser import SQLLineageParser

class FileIngestionService:
    EXTRACTORS = {
        "pdf": PDFExtractor,
        "docx": DOCXExtractor,
        "csv": CSVExtractor,
        "sql": SQLExtractor,
        "py": CodeExtractor,
        "txt": TextFileExtractor,
    }

    def __init__(self):
        pass

    def extract(self, file_path: str):
        ext = file_path.split(".")[-1].lower()

        if ext not in self.EXTRACTORS:
            raise ValueError(f"Unsupported file type: {ext}")

        extractor = self.EXTRACTORS[ext]()
        content = extractor.extract(file_path)
        if ext == 'sql':
            parser = SQLLineageParser()
            tables = parser.extract_tables_from_sql(content)
            print("Tables:", tables)
        return content

if __name__ == "__main__":
    service = FileIngestionService()
    test_file = "uploads/industry_sic.csv"
    extracted_text = service.extract(test_file)

    print(extracted_text)