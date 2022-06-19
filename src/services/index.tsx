import axios, { AxiosResponse } from "axios";

export const getBooks = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        try {
            axios.get('https://my-json-server.typicode.com/kyhnlbyrk/fake-api/db')
                .then(response => {
                    resolve(response.data);
                });
        } catch (error) {
            reject(error);
        }
    });
};
