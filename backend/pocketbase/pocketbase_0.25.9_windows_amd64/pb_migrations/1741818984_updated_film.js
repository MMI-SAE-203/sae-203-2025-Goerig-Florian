/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("editor3734160847")

  // remove field
  collection.fields.removeById("editor2220277813")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(9, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3734160847",
    "maxSize": 0,
    "name": "annee_description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
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
})
