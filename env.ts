if (!process.env.MY_VAR) {
  throw new Error("MY_VAR is not set");
}

export const MY_VAR = process.env.MY_VAR;
