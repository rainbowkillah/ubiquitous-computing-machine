export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello World!', {
      headers: {
        'content-type': 'text/plain',
      },
    });
  },
};

export interface Env {
  // Define your bindings here
  // Example: MY_KV: KVNamespace;
}
