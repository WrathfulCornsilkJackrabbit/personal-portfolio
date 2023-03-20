migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blklh5iyxjikapd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbi64xh0",
    "name": "color",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blklh5iyxjikapd")

  // remove
  collection.schema.removeField("fbi64xh0")

  return dao.saveCollection(collection)
})
