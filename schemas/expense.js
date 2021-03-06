module.exports = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://schema.kosmos.org/Expense",
  "type": "object",
  "title": "Expense",
  "description": "Record of costs expended",
  "default": {},
  "required": [
    "title",
    "currency",
    "amount"
  ],
  "additionalProperties": true,
  "properties": {
    "@context": {
      "type": "string",
      "enum": [ "https://schema.kosmos.org" ],
      "default": "https://schema.kosmos.org"
    },
    "@type": {
      "type": "string",
      "enum": [ "Expense" ],
      "default": "Expense"
    },
    "title": {
      "type": "string",
      "title": "Title",
      "description": "A short description of the expense",
      "default": "",
      "examples": [
        "Server rent"
      ]
    },
    "description": {
      "type": "string",
      "title": "Description",
      "description": "A longer description of the expense",
      "default": "",
      "examples": [
        "Dedicated server: andromeda.kosmos.org"
      ]
    },
    "currency": {
      "type": "string",
      "title": "Currency",
      "description": "ISO 4217 (or other) code of the currency that the expense was paid with",
      "default": "",
      "examples": [
        "EUR",
        "USD",
        "BTC"
      ]
    },
    "amount": {
      "type": "number",
      "title": "Amount",
      "description": "Expended amount of defined currency",
      "default": 0,
      "examples": [
        42.0
      ]
    },
    "date": {
      "type": "string",
      "format": "date",
      "title": "Date",
      "description": "Date when expense was logged/proposed (RFC 3339 full-date)"
    },
    "url": {
      "type": "string",
      "format": "uri",
      "title": "URL",
      "description": "A URL pointing to more information about the expense or related items",
      "default": "",
      "examples": [
        "https://wiki.kosmos.org/Infrastructure#Hetzner"
      ]
    },
    "tags": {
      "type": "array",
      "title": "Tags",
      "description": "Tags for organizing, filtering, sorting, etc.",
      "default": [],
      "items": {
        "anyOf": [
          {
            "type": "string",
            "title": "Tag",
            "description": "A tag (lowercase dasherized)",
            "default": "",
            "examples": [
              "infrastructure",
              "server"
            ]
          }
        ]
      }
    },
    "details": {
      "type": "object",
      "title": "Tag",
      "properties": {}
    }
  }
}
