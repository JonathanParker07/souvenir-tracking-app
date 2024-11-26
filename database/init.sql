CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    souvenirs TEXT[],
    received BOOLEAN DEFAULT FALSE
);

INSERT INTO students (name, souvenirs, received) VALUES
('John Doe', ARRAY[]::TEXT[], FALSE),
('Jane Smith', ARRAY[]::TEXT[], FALSE);
