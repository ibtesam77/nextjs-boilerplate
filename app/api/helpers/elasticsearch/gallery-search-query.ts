export default function gallerySearchQuery(
  from: number,
  size: number,
  filters: string | undefined
) {
  let subFilters = "";
  let sort = `"sort": 
  [
    {
      "_script": {
        "type": "number",
        "script": {
          "lang": "painless",
          "source": "Math.random()"
        },
        "order": "asc"
      }
    }
  ],`;
  if (filters) {
    sort = `"sort": [
              {
                "generalInfo.itemCode.keyword": {
                  "order": "asc"
                }
              }
            ],`;
    const filtersArr: string[] = filters
      .split(",")
      .filter((value) => value.trim() !== "");
    const shouldArray = filtersArr.map(
      (id) => `{
        "multi_match": {
          "query": "${id}",
          "fields": ["metadataLists.subjects.id"]
        }
      }`
    );
    subFilters = `,
      {
        "bool": {
          "should": [
            {
              "nested": {
                "path": "metadataLists.subjects",
                "query": {
                  "bool": {
                    "should": [${shouldArray}]
                  }
                }
              }
            }
          ]
        }
      }`;
  }

  const searchJson = `{
    "from": ${from},
    "size": ${size},
    ${sort}
    "query": {
      "bool": {
        "must": [
          {
            "match_all": {}
          },
          {
            "bool": {
              "should": [
                {
                  "nested": {
                    "path": "generalInfo.collections",
                    "query": {
                      "bool": {
                        "should": [
                          {
                            "multi_match": {
                              "query": "36",
                              "fields": ["generalInfo.collections.id"]
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "bool": {
              "should": [
                {
                  "nested": {
                    "path": "metadataLists.subjects",
                    "query": {
                      "bool": {
                        "should": [
                          {
                            "multi_match": {
                              "query": "4359",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4358",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4356",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4355",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4357",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4369",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4361",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          },
                          {
                            "multi_match": {
                              "query": "4370",
                              "fields": ["metadataLists.subjects.id"]
                            }
                          }
                        ]
                      }
                    },
                    "inner_hits": {
                      "size": 100,
                      "_source": ["metadataLists.subjects.termSegments"]
                    }
                  }
                }
              ]
            }
          }
          ${subFilters}
        ]
      }
    }
  }`;

  return JSON.parse(searchJson);
}
