import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { assistant } from '../db/schema'


type Env = {
    DB: D1Database
}

const api_assistant = new Hono<{ Bindings: Env }>()

api_assistant
    .get('/assistant/', async (c) => {
        try{
            const db = drizzle(c.env.DB)
            const assistants = await db.select().from(assistant)
            return c.json(assistants)
        } catch (error){
            return c.json(
                { error, }, 400
            )
        }
    })
    .post('/assistant/', async (c) => {
        const body = await c.req.json()
        const new_assistant = {
          full_name: body.full_name as string,
          comment: body.comment as string,
          is_ceremony: body.is_ceremony as string,
          is_celebration: body.is_celebration as string
        } 
        try {
          const db = drizzle(c.env.DB);
          await db.insert(assistant).values(new_assistant)
    
          return new Response('Created', { status: 201 })
        } catch (error) {
          console.log(error)
          return c.json(
            {error}, 400
          );
        }
      })


export {api_assistant}