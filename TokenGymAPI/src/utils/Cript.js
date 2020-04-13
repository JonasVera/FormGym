const crypto = require("crypto");
const secret = "asdadqw3e13dewsfcw3er3er2weqwe";

const encrypt = (value) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(secret), iv);
  let encrypt = cipher.update(value);
  encrypt = Buffer.concat([encrypt, cipher.final()]);
  return encrypt.toString("hex");
};
