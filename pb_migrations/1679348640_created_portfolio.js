migrate((db) => {
  const collection = new Collection({
    "id": "ctimgnpe28rl37z",
    "created": "2023-03-20 21:44:00.653Z",
    "updated": "2023-03-20 21:44:00.653Z",
    "name": "portfolio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdw3qkne",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "y6msahog",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("ctimgnpe28rl37z");

  return dao.deleteCollection(collection);
})
