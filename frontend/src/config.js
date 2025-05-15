// base Url API
export const baseUrl = import.meta.env.VITE_API_URL;

// file url
export const fileUrl = import.meta.env.VITE_FILE_URL;

// header token
export const token = () => {
    const userInfo  = localStorage.getItem('userInfo');
    const data      = JSON.parse(userInfo);
    return data.token;
}
