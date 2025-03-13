/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2220277813",
    "maxSize": 0,
    "name": "duree_faux",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
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
})
