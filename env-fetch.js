import fs from "fs";

// Assume this comes from AWS Secrets Manager
const SECRET_STRING = '{"MY_VAR":"my-value","ANOTHER_VAR":"another-value"}';

try {
  const secrets = JSON.parse(SECRET_STRING);

  // Create .env.local content
  const envContent = Object.entries(secrets)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  // Write to .env.local
  fs.writeFileSync(".env.local", envContent);
} catch (error) {
  console.error("Error fetching secrets:", error);
}
