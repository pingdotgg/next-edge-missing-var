import { MY_VAR } from "../../env";

export const runtime = "edge";

export const POST = async (request: Request) => {
  return Response.json({ message: `Hello, ${MY_VAR}!` });
};
