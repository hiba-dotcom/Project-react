import apiClient from "./apiClient.js";

const HackathonsService = {
    getAll: () => {
        return apiClient.get("/hackathons");
    },
    getById: (id) =>{
        return apiClient.get(`/hackathons/${id}`);
    },
    create: (data) => {
        return apiClient.post("/hackathons", data);
    },
    update: (id, data)  =>{
        return apiClient.put(`/hackathons/${id}`, data);
    },
    remove: (id) => {
        return apiClient.delete(`/hackathons/${id}`);
    },
}
    


export default HackathonsService