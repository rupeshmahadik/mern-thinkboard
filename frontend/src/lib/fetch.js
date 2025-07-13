const BASEURL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const baseUrl = BASEURL; //"http://localhost:5001/api";

export default baseUrl;
