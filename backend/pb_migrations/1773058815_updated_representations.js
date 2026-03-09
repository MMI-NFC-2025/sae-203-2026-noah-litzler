/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1658603923")

  // remove field
  collection.fields.removeById("text2958843075")

  // remove field
  collection.fields.removeById("text270197578")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1658603923")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2958843075",
    "max": 0,
    "min": 0,
    "name": "heure_affichage",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text270197578",
    "max": 0,
    "min": 0,
    "name": "jour_affichage",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
