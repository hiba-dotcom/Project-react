const API_BASE_URL = "http://localhost:8080";

async function request(path, options = {}) {
    const responce = await fetch(API_BASE_URL + path,{
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options
    });

    if (!responce.ok) {
        const message = await responce.text();
        throw new Error(message ||"Erreur API");
    }
    if (responce.status === 204) {
        return null;
    }

    return responce.json();
}

export default{
    get:(path) =>request(path),
    post: (path, body) => 
    request(path, { method: "POST",body: JSON.stringify(body)}),
    put: (path, body) => 
    request(path, {method: "PUT",body: JSON.stringify(body)}),
    delete: (path) => 
    request(path, {method: "DELETE"}),
};