CREATE TABLE `assistant` (
	`id` integer PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`comment` text,
	`is_ceremony` integer NOT NULL,
	`is_celebration` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `song` (
	`id` integer PRIMARY KEY NOT NULL,
	`guest_name` text NOT NULL,
	`song_name` text,
	`url` text
);
