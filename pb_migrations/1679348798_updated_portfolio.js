migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctimgnpe28rl37z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igxkgind",
    "name": "tech_stack",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "blklh5iyxjikapd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zr9cqc0e",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctimgnpe28rl37z")

  // remove
  collection.schema.removeField("igxkgind")

  // remove
  collection.schema.removeField("zr9cqc0e")

  return dao.saveCollection(collection)
})
