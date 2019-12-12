import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6b52485ed72cbabfd6aa5a1784943cc671b949c23377dc65d7ba696766396232"
  }
});
