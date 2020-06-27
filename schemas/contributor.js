module.exports = {
  "$schema": "https://json-schema.org/draft-07/schema#",
  "id": "https://schema.kosmos.org/Contributor",
  "properties": {
    "@context": {
      "type": "string",
      "enum": [ "https://schema.kosmos.org" ],
      "default": "https://schema.kosmos.org"
    },
    "@type": {
      "type": "string",
      "enum": [ "Contributor" ],
      "default": "Contributor"
    },
    "kind": {
      "type": "string",
      "title": "Kind",
      "description": "Category of contributor",
      "enum": [
        "person",
        "organization",
        "robot"
      ]
    },
    "name": {
      "type": "string",
      "title": "Name",
      "description": "Display name of the person, organisation, robot, or whatever entity might conribute in the future"
    },
    "url": {
      "type": "string",
      "format": "uri",
      "title": "URL",
      "description": "A URL pointing to the contributor's website or profile page on the Web"
    },
    "accounts": {
      "items": {
        "properties": {
          "site": {
            "type": "string",
            "title": "Site",
            "description": "Site name or domain, e.g. 'github.com'"
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Publicly visible nickname/handle of the user"
          },
          "uid": {
            "type": "integer",
            "title": "User ID",
            "description": "A numeric account ID"
          },
          "url": {
            "type": "string",
            "format": "uri",
            "title": "URL",
            "description": "A URL pointing to the account's public profile"
          }
        },
        "required": [
          "site",
          "username"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "kind",
    "name"
  ],
  "type": "object"
}
