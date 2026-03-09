/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1596439714",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_principale",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file290148519",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "galerie_photos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("file1596439714")

  // remove field
  collection.fields.removeById("file290148519")

  return app.save(collection)
})
