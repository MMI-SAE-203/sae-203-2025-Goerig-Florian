/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("text3942306658")

  // add field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2220277813",
    "maxSize": 0,
    "name": "duree",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3942306658",
    "max": 0,
    "min": 0,
    "name": "acteur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("editor2220277813")

  return app.save(collection)
})
