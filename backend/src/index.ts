import { Hono } from 'hono';
import { sign,verify } from 'hono/jwt';
import { userRouter } from './rotues/user';
import { blogRouter } from './rotues/blog';

// we have to add this bindings here because typescript things, without this the env variables give an error
const app = new Hono<{
  Bindings: {
    DATABASE_URL : string,
    JWT_SECRET : string
  },Variables : {
		userId: string
	}
}>()
// wrangler.toml me secrets rakhte hai
// c here is context which contains req, res, env variabels etc, almost everything

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


// This is the authentication middleware 
// app.use('/api/v1/blog/*', async (c, next) => {
// 	const jwt = c.req.header('Authorization');
// 	if (!jwt) {
// 		c.status(401);
// 		return c.json({ error: "unauthorized" });
// 	}
// 	const token = jwt.split(' ')[1];
// 	const payload = await verify(token, c.env.JWT_SECRET);
// 	if (!payload) {
// 		c.status(401);
// 		return c.json({ error: "unauthorized" });
// 	}
// 	c.set('userId', payload.id);
// 	await next()
// })


export default app
