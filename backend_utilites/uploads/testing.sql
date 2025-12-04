-- SELECT(DDL) => no manipulation of data, only shows data. 
-- SELECT col1, col2, col3,... FROM table_name;
-- to show data of all the cols present.
-- SELECT * FROM table_name;

use student;
SELECT name AS "Student Name", phone AS PHONE from student_data;

-- WHERE Comparison operators
-- <> or != not equal
-- > greater than
-- < less than
-- >= greater than or equal to
-- <= less than or equal to
-- BETWEEN 20 AND 30
-- LIKE "a%" (a followed by zero or more characters)
-- LIKE "a_" (a followed by one character)

SELECT * from student_data WHERE phone="7004057591";
SELECT * from student_data WHERE age>=21;
SELECT * from student_data WHERE age BETWEEN 21 AND 30;
SELECT * from student_data WHERE age!=21;

-- use of WHERE with 'AND' 'OR' 'NOT'
SELECT * from student_data WHERE age=21 AND name="Aditya";
SELECT * from student_data WHERE age=21 or name="Aditya";
SELECT * from student_data WHERE age>=20 and NOT name="Aditya";

-- IN operator: it allows u to easily test if an expression matches any value in a list of values, below gives rows whose age value is either 19 or 21.
SELECT * from student_data WHERE age IN (19,21);
-- below gives rows whose age value is not 19, 21 and 15.
SELECT * from student_data WHERE age NOT IN (19,21,15);

-- use of BETWEEN, below will give rows whose age>=20 and age<=23, BETWEEN clause is inclusive
SELECT * from student_data WHERE age BETWEEN 20 AND 23;
-- below will give rows whose name starts from a to k
SELECT * from student_data WHERE name BETWEEN "a" AND "k";

-- use of LIKE
-- SELECT * from student_data WHERE name LIKE "d%"; this will show no data as none of the name starts from 'd' or 'D'
--  SELECT * from student_data WHERE name LIKE "A_";
-- LIKE 'a%', starts with a
-- LIKE '%a', ends with a
-- LIKE '%am%', contains am
-- LIKE '_a%', second letter is a
-- LIKE 'a__', first letter is a and second and third letter is anything
-- LIKE 'a%o', starts with a and ends with o
-- LIKE '_oy', o at second pos and y at third
-- LIKE '_tap%', matches strings which contain substring 'tap' at second position.
-- LIKE 'a__%', matches strings which start with 'a' and contain at least 2 more characters.
-- SELECT * from student_data WHERE name LIKE "%ya%";
-- SELECT * from student_data WHERE name NOT LIKE "a%";

-- to make the query case sensitive we use BINARY
-- SELECT * from student_data WHERE BINARY name LIKE "A%";

SELECT * from student_data WHERE phone LIKE "%1";

--Performing some calculations on the col using SELECT
SELECT name, age, age+10 as ageinc10 from student_data;

--Displaying multiple tables
SELECT * from student_data, student_marks;

-- sal<2000 and sal>3000
SELECT * from emp WHERE sal NOT BETWEEN 2000 AND 3000;

-- practice question
select * from emp where (salary>1500 or job='manager') and (dept=10 or dept=30)

-- displaying second highest salary
SELECT MAX(sal) FROM emp WHERE sal NOT IN (SELECT MAX(sal) FROM emp);