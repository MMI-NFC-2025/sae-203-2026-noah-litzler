/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1658603923")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3183463462",
    "hidden": false,
    "id": "relation2617718095",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "artiste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1254289504",
    "hidden": false,
    "id": "relation3648647130",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2877489204",
    "max": "",
    "min": "",
    "name": "date_heure",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

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

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1658603923")

  // remove field
  collection.fields.removeById("relation2617718095")

  // remove field
  collection.fields.removeById("relation3648647130")

  // remove field
  collection.fields.removeById("date2877489204")

  // remove field
  collection.fields.removeById("text2958843075")

  // remove field
  collection.fields.removeById("text270197578")

  // remove field
  collection.fields.removeById("text1843675174")

  return app.save(collection)
})
