import { Hono } from 'hono'
import { api_assistant } from './views/assistant'
import { api_song } from './views/song'

type Env = {
  MY_VAR: string
}

const mainApp = new Hono<{Bindings: Env}>()

mainApp.get('/', (c) => {
  return c.json({
      "hello": "world",
      "var": c.env.MY_VAR
  })
})

mainApp.route('/api/', api_assistant)
mainApp.route('/api/', api_song)

export default mainApp
