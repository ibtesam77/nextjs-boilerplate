export function elasticServerUrlItemIndex(lang: string = "eng") {
  const elasticSearchHost = process.env.ELASTICSEARCH_HOST || "";
  let elasticSearchIndex = process.env.ITEM_INDEX_NODE_ENG || "";
  if (lang == "rus") {
    elasticSearchIndex = process.env.ITEM_INDEX_NODE_RUS || "";
  }
  const elasticUrl = elasticSearchHost + elasticSearchIndex;
  return elasticUrl;
}

export function elasticBasicAuth() {
  const elasticAuthUsername = process.env.ELASTIC_AUTH_USERNAME;
  const elasticAuthPass = process.env.ELASTIC_AUTH_PASS || "";

  const elasticAuth = `${elasticAuthUsername}:${elasticAuthPass}`;
  const elasticBasicAuth = Buffer.from(elasticAuth).toString("base64");

  const elasticBasicAuthHeader = `Basic ${elasticBasicAuth}`;
  return elasticBasicAuthHeader;
}
