const requestHTTP = async (
  url,
  callBack,
  method = 'GET',
  body = null,
  headers = {}
) => {
  try {
    let response = await fetch(url, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(response.message || 'что то не так с запросом');
    }
    let result = await response.json();

    callBack(result);
    return result;
  } catch (err) {
    throw err;
  }
};
