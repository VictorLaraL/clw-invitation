import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";


export const assistant = sqliteTable('assistant', {
    id: integer('id').primaryKey(),
    full_name: text('full_name').notNull(),
    comment: text('comment'),
    is_ceremony: integer('is_ceremony', {mode: 'boolean'}).notNull(), 
    is_celebration: integer('is_celebration', {mode: 'boolean'}).notNull()
})

export const song = sqliteTable('song', {
    id: integer('id').primaryKey(),
    guest_name: text('guest_name').notNull(),
    song_name: text('song_name'),
    url: text('url')
})