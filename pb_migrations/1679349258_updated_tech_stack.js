migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blklh5iyxjikapd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "olalkadb",
    "name": "link",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blklh5iyxjikapd")

  // remove
  collection.schema.removeField("olalkadb")

  return dao.saveCollection(collection)
})
