import { showLoader, hideLoader } from "./slice";

let store = null;

const APPLICATION_JSON = "application/json";
const MULTIPART_FORM_DATA = "multipart/form-data";

const METHODS = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

const headers = (type) => ({
  Accept: "application/json, text/plain, */*",
  "Content-Type": type,
});

async function handleRequest(method, url, body, noloader, options) {
  try {
    if (!noloader) {
      store.dispatch(showLoader());
    }
    const res = await fetch(url, {
      method,
      ...(method !== METHODS.GET &&
        method !== METHODS.DELETE && {
          headers: headers(
            body instanceof FormData ? MULTIPART_FORM_DATA : APPLICATION_JSON
          ),
        }),
      ...(body !== null && {
        body: body instanceof FormData ? body : JSON.stringify(body),
      }),
      ...options,
    });
    if (!res.ok) {
      throw res;
    }
    const data = await res.json();

    if (!noloader) {
      store.dispatch(hideLoader());
    }

    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    if (!noloader) {
      store.dispatch(hideLoader());
    }
    return Promise.reject(error);
  }
}

const apiUtil = {
  fetch: async (url, noloader, options) =>
    handleRequest(METHODS.GET, url, null, noloader, options),
  post: async (url, noloader, body, options) =>
    handleRequest(METHODS.POST, url, body, noloader, options),
  put: async (url, noloader, body, options) =>
    handleRequest(METHODS.PUT, url, body, noloader, options),
  delete: async (url, noloader, body, options) =>
    handleRequest(METHODS.DELETE, url, null, noloader, options),
};

export const initLoader = (appStore) => {
  store = appStore;
};

export default apiUtil;
