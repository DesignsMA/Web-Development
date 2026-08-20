-- =========================
-- EMPLEADOS
-- =========================
INSERT INTO empleados (nombre_emp) VALUES
('Ana Lopez'),
('Luis Martinez'),
('Carlos Gomez'),
('Maria Fernandez'),
('Jorge Ramirez'),
('Sofia Torres'),
('Diego Hernandez'),
('Laura Castillo');

-- =========================
-- GERENTES
-- =========================
INSERT INTO gerentes (nombre_gerente) VALUES
('Ricardo Salinas'),
('Patricia Mendez'),
('Fernando Cruz');

-- =========================
-- DEPARTAMENTOS
-- =========================
INSERT INTO departamentos (nombre_depto) VALUES
('Tecnologia'),
('Recursos Humanos'),
('Finanzas'),
('Marketing');

-- =========================
-- PROYECTOS
-- =========================
INSERT INTO proyectos (nombre_proyecto) VALUES
('Sistema de Nomina'),
('Plataforma Web'),
('App Movil'),
('Migracion Cloud'),
('Analisis de Datos');

-- =========================
-- ASIGNACIONES
-- =========================
-- (no_emp, num_proyecto, fecha_inicio, pagoxhr)

INSERT INTO asignaciones VALUES
(1, 1, '2026-01-10', 120.00),
(1, 2, '2026-02-01', 130.00),

(2, 2, '2026-01-15', 110.00),
(2, 3, '2026-03-01', 115.00),

(3, 1, '2026-01-20', 100.00),
(3, 4, '2026-02-10', 105.00),

(4, 3, '2026-01-25', 125.00),

(5, 4, '2026-02-05', 140.00),
(5, 5, '2026-03-10', 145.00),

(6, 5, '2026-02-15', 135.00),

(7, 2, '2026-03-01', 118.00),
(7, 3, '2026-03-15', 122.00),

(8, 1, '2026-02-20', 110.00);