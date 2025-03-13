/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(9, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3734160847",
    "maxSize": 0,
    "name": "annee",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
