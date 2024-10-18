import { Hono } from 'hono'

type Env = {
  MY_VAR: string
}

const mainApp = new Hono<{Bindings: Env}>()

mainApp.get('/', (c) => {
  return c.json({
      "var": c.env.MY_VAR
  })
})

export default mainApp
