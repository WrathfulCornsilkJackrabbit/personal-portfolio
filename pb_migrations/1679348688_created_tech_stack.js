migrate((db) => {
  const collection = new Collection({
    "id": "blklh5iyxjikapd",
    "created": "2023-03-20 21:44:48.649Z",
    "updated": "2023-03-20 21:44:48.649Z",
    "name": "tech_stack",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u0ys8xot",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("blklh5iyxjikapd");

  return dao.deleteCollection(collection);
})
