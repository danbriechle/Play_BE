
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('playlists_favorites', function(table) {
      table.integer('playlist_id').unsigned()
      table.foreign('playlist_id')
        .references('playlists.id');
      table.integer('favorite_id').unsigned()
      table.foreign('favorite_id')
        .references('favorites.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('playlists_favorites')
  ]);
}
