import sqlparse
from sqlparse.sql import IdentifierList, Identifier
from sqlparse.tokens import Keyword, Comment

class SQLLineageParser:

    def parse_sql(self, sql_text: str):
        # Normalize SQL and uppercase keywords
        sql_text = sqlparse.format(sql_text, keyword_case="upper", strip_comments=False)
        return sqlparse.parse(sql_text)

    def extract_tables_from_sql(self, sql_text: str):
        statements = self.parse_sql(sql_text)
        all_tables = []

        for stmt in statements:
            tables = self._extract_tables_from_statement(stmt)
            all_tables.extend(tables)

        # Unique while preserving order
        return list(dict.fromkeys(all_tables))

    def _extract_tables_from_statement(self, stmt):
        tables = []
        from_seen = False

        for token in stmt.tokens:

            # Ignore whitespace
            if token.is_whitespace:
                continue

            # Ignore comments
            if token.ttype in Comment:
                continue

            # Detect FROM / JOIN
            if token.ttype is Keyword and token.value.upper() in (
                "FROM", "JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"
            ):
                from_seen = True
                continue

            # Next meaningful token after FROM/JOIN contains table name(s)
            if from_seen:
                extracted = self._extract_identifiers(token)
                tables.extend(extracted)
                from_seen = False

        return tables

    def _extract_identifiers(self, token):
        if isinstance(token, IdentifierList):
            return [ident.get_real_name() for ident in token.get_identifiers()]
        elif isinstance(token, Identifier):
            return [token.get_real_name()]
        return []
