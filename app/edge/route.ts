export const runtime = "edge";

export const POST = async (request: Request) => {
  const env = process.env.MY_VAR;
  return Response.json({ message: `Hello, ${env ?? "<missing>"}!` });
};
