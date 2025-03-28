import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
  integer,
} from "drizzle-orm/pg-core";

export const boardColumnsTable = pgTable(
  "board_columns",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    boardId: uuid("board_id").notNull(),
    sortIndex: integer("sort_index").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .default(sql`null`)
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    uniqueBoardIdName: unique("unique_board_id_name").on(
      table.boardId,
      table.name
    ),
  })
);
