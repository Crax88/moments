import { apiUtil } from "../components/loader";

class Api {
  constructor(apiUtil) {
    this.api = apiUtil;
    this.baseUrl = "/api/";
  }
  makeRequest = async (url, method, body = null, options = {}) => {
    try {
      const data = await this.api[method](
        `${this.baseUrl}${url}`,
        false,
        body,
        {
          credentials: "include",
          ...options,
        }
      );
      return data;
    } catch (error) {
      let err = error;
      if (false === error instanceof Error) {
        err = { data: error.data, errors: true };
      }
      return err;
    }
  };
  authUser = async () => {
    return await this.makeRequest("auth/me", "fetch");
  };
  registerUser = async (user) => {
    return await this.makeRequest("auth/register", "post", user);
  };
  loginUser = async (credentials) => {
    return await this.makeRequest("auth/login", "post", credentials);
  };
  getPosts = async () => {
    return await this.makeRequest("posts", "fetch");
  };
  getPostById = async (id) => {
    return await this.makeRequest(`posts/${id}`, "fetch");
  };
  createPost = async (post) => {
    return await this.makeRequest("posts", "post", post);
  };
  updatePost = async (post) => {
    return await this.makeRequest(`posts/${post._id}`, "put", post);
  };
  deletePost = async (id) => {
    return await this.makeRequest(`posts/${id}`, "delete");
  };
  likePost = async (id) => {
    return await this.makeRequest(`posts/${id}/like`);
  };
}

export default new Api(apiUtil);
