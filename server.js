import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

// För loggning med stacktrace
const originalLog = console.log;
console.log = (...args) => {
  const stack = new Error().stack?.split("\n")[2] || "Unknown location";
  const location = stack.trim().replace(/^at\s+/, "");
  originalLog(`[${location}]`, ...args);
};

const requestHandler = async (req) => {
  const url = new URL(req.url, "http://localhost:8888");

  if (url.pathname === "/favicon.ico") {
      return new Response(null, { status: 204 });
  }

  const filePath = `./public${url.pathname === "/" ? "/index.html" : url.pathname}`;
  
  try {
      return await serveFile(req, filePath);
  } catch (error) {
      console.error(`Error serving file: ${error.message}`);
      return new Response("File not found", { status: 404 }); 
  }
}

serve(requestHandler, { port: 8888 });