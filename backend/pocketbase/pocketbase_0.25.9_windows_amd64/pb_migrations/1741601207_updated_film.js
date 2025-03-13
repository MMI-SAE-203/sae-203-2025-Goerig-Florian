/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("number3734160847")

  // add field
  collection.fields.addAt(10, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number3734160847",
    "max": null,
    "min": null,
    "name": "annee",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("editor3734160847")

  return app.save(collection)
})
