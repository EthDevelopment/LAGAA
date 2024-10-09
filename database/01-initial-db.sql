USE wealth;

CREATE TABLE IF NOT EXISTS `finance` (
  `depositid` bigint NOT NULL AUTO_INCREMENT,
  `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `total_balance` BIGINT NOT NULL,
  `add_amount` BIGINT NOT NULL,
  `subtract_amount` BIGINT NOT NULL,
  PRIMARY KEY (`depositid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert initial data
INSERT INTO finance (total_balance, add_amount, subtract_amount) VALUES
(1000, 500, 100),
(1400, 600, 200),
(1800, 300, 100);