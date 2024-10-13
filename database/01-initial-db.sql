-- Create the 'finance' table if it doesn't exist
CREATE TABLE IF NOT EXISTS finance (
  id BIGINT NOT NULL AUTO_INCREMENT,
  transaction_id BIGINT NOT NULL,
  time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total_balance BIGINT NOT NULL DEFAULT 0,
  change_amount BIGINT,
  change_type VARCHAR(10),
  PRIMARY KEY (id)
);

-- Seed initial account with 0 balance (optional)
INSERT INTO finance (transaction_id, total_balance, change_amount, change_type, time)
VALUES
  (1, 0, 0, 'INITIAL', CURRENT_TIMESTAMP);