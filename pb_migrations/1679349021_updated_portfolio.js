migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctimgnpe28rl37z")

  // update
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctimgnpe28rl37z")

  // update
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

  return dao.saveCollection(collection)
})
