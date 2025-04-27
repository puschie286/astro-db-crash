import { column, defineDb, defineTable } from 'astro:db';

const Test = defineTable( {
	columns: {
		id: column.number( { primaryKey: true } ),
		name: column.text(),
		link: column.text(),
		age: column.number(),
		size: column.number(),
		weight: column.number(),
		sex: column.text(),
		ranking: column.number(),
	}
} );

// https://astro.build/db/config
export default defineDb({
  tables: { Test }
});
