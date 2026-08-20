CREATE TABLE IF NOT EXISTS empleados (
    no_emp INT PRIMARY KEY AUTO_INCREMENT,
    nombre_emp VARCHAR(50) NOT NULL
)CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS gerentes (
    no_gerente INT PRIMARY KEY AUTO_INCREMENT,
    nombre_gerente VARCHAR(50) NOT NULL
)CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS departamentos (
    num_depto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_depto VARCHAR(50) NOT NULL
)CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS proyectos (
    num_proyecto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_proyecto VARCHAR(50) NOT NULL
)CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS asignaciones (
    no_emp INT NOT NULL,
    num_proyecto INT NOT NULL,
    fecha_inicio DATE,
    pagoxhr DECIMAL(10, 2),
    PRIMARY KEY(no_emp, num_proyecto),
    FOREIGN KEY (no_emp) 
     REFERENCES empleados(no_emp) 
     ON DELETE CASCADE,
    FOREIGN KEY (num_proyecto) 
     REFERENCES proyectos(num_proyecto)
     ON DELETE CASCADE
);