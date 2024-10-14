-- DB set up

-- 1. Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Finance Table
CREATE TABLE finance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    cash_balance DECIMAL(10, 2) DEFAULT 0.00,
    assets_value DECIMAL(10, 2) DEFAULT 0.00,
    stock_value DECIMAL(10, 2) DEFAULT 0.00,
    crypto_holdings DECIMAL(10, 2) DEFAULT 0.00,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Health Table
CREATE TABLE health (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    weight DECIMAL(5, 2),
    height DECIMAL(5, 2),
    run_time_1k TIME,  -- Time to run 1k
    run_time_2k TIME,  -- Time to run 2k
    run_time_3k TIME,  -- Time to run 3k
    max_pushups INT DEFAULT 0,
    pushups_today INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 4. Skills Table
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    language_spoken VARCHAR(100),  -- Could have multiple entries per user
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 5. Mental Table (Journal)
CREATE TABLE mental (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    journal_entry VARCHAR(1000),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- User initialisation

-- 1. Insert into Users Table
INSERT INTO users (username, email, password_hash)
VALUES ('john_doe', 'johndoe@example.com', 'hashedpassword123');

-- Get the user_id for the newly created user (assuming auto_increment is being used)
-- Use this ID to populate other tables. If running manually, you might replace LAST_INSERT_ID() with the actual ID.
SET @user_id = LAST_INSERT_ID();

-- 2. Insert into Finance Table
INSERT INTO finance (user_id, cash_balance, assets_value, stock_value, crypto_holdings)
VALUES (@user_id, 5000.00, 15000.00, 7500.00, 2000.00);

-- 3. Insert into Health Table
INSERT INTO health (user_id, weight, height, run_time_1k, run_time_2k, run_time_3k, max_pushups, pushups_today)
VALUES (@user_id, 80.5, 1.75, '00:04:30', '00:10:00', '00:18:30', 100, 30);

-- 4. Insert into Skills Table
-- Multiple rows for multiple languages spoken
INSERT INTO skills (user_id, language_spoken)
VALUES (@user_id, 'English'), (@user_id, 'Spanish');

-- 5. Insert into Mental Table (Journal)
INSERT INTO mental (user_id, journal_entry)
VALUES (@user_id, 'Today I focused on my goals and made significant progress in all areas.');

-- Verify the results with SELECT queries (optional)
SELECT * FROM users WHERE id = @user_id;
SELECT * FROM finance WHERE user_id = @user_id;
SELECT * FROM health WHERE user_id = @user_id;
SELECT * FROM skills WHERE user_id = @user_id;
SELECT * FROM mental WHERE user_id = @user_id;