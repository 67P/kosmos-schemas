module.exports = {
  "$schema": "https://json-schema.org/draft-07/schema#",
  "id": "https://schema.kosmos.org/Contribution",
  "properties": {
    "@context": {
      "type": "string",
      "enum": [ "https://schema.kosmos.org" ],
      "default": "https://schema.kosmos.org"
    },
    "@type": {
      "type": "string",
      "enum": [ "Contribution" ],
      "default": "Contribution"
    },
    "contributor": {
      "properties": {
        "ipfs": {
          "type": "string",
          "format": "uri",
          "title": "IPFS URI",
          "description": "An IPFS object URI containing profile information of the contributor"
        }
      },
      "required": [
        "ipfs"
      ],
      "type": "object"
    },
    "date": {
      "type": "string",
      "format": "date",
      "title": "Date",
      "description": "Date of contribution (RFC 3339 full-date)"
    },
    "time": {
      "type": "string",
      "format": "time",
      "title": "Time",
      "description": "Time of contribution (RFC 3339 full-time)"
    },
    "kind": {
      "type": "string",
      "title": "Kind",
      "description": "Type/category of contribution",
      "enum": [
        "bureaucracy",
        "dev",
        "design",
        "ops",
        "docs",
        "community",
        "special",
        "qa",
        "outreach"
      ]
    },
    "description": {
      "type": "string",
      "title": "Description",
      "description": "A summary of the contribution. Can be manually entered or automatically generated."
    },
    "url": {
      "type": "string",
      "format": "uri",
      "title": "URL",
      "description": "A URL pointing to human-readable details of the contribution"
    },
    "details": {
      "type": "object",
      "properties": {}
    }
  },
  "required": [
    "contributor",
    "date",
    "kind",
    "description"
  ],
  "type": "object"
}
