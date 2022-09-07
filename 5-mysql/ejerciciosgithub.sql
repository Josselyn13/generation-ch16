USE generation;

-- Ejercicio 1
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- Ejercicio 2
SELECT Students.*, idtypes.id_idTypes, idtypes.name FROM Students 
INNER JOIN idtypes 
ON Students.IdType_id = idtypes.id_idTypes;

-- Ejercicio 3
SELECT 
Students.*, 
Courses_has_students.course_code
FROM Students 
INNER JOIN courses_has_students
ON Students.idStudent = Courses_has_students.students_id_student;

-- Ejercicio 4
SELECT courses_has_students.*, courses.code, courses.name FROM courses_has_students
INNER JOIN courses ON courses.code = courses_has_students.course_code;

-- Ejercicio 5


-- Ejercicio 6


