// import axios from "axios";

// import { LOGIN } from "../constant/apiEndpoints";
// // import { useLogout } from "../hooks/useLogout";

// const client = axios.create({
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// client.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("tokenData");

//         // 🔹 Dynamically set baseURL
//         config.baseURL = LOGIN;


//         // 🔹 Auth API → let Axios handle FormData headers
//         if (config.url?.includes(LOGIN)) {
//             delete config.headers["Content-Type"];
//         }

//         // 🔹 Attach token for ALL authenticated requests
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// const request = (options) => {
//     return client(options)
//         .then((response) => response.data)
//         .catch((error) => {
//             if (
//                 error?.response &&
//                 (error.response.status === 401 || error.response.status === 403)
//             ) {
//                 useLogout();
//             }
//             return Promise.reject(error.response || error.message);
//         });
// };

// export default request;


import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("tokenData");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

const request = (options) => {
    return client(options)
        .then((response) => response.data)
        .catch((error) => {
            if (
                error?.response &&
                (error.response.status === 401 || error.response.status === 403)
            ) {
                // token missing/invalid/expired — let the caller decide what to do
                // e.g. redirect to login, but only for protected routes
            }
            return Promise.reject(error.response || error.message);
        });
};

export default request;