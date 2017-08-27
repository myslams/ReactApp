import axios from 'axios';

export default class ImageService {
    constructor(endpointUrl) {
        this.endpointUrl = endpointUrl;
    }
    // image service to get image data from nodejs rest endpoint.
    getData(tags) {
        return axios.get(this.endpointUrl+tags)
            .then(response =>
                response.status === 200 ? {
                    "res": response.data,
                    "status": "success"
                } : {
                    "res": [],
                    "status": "error"
                }
            )
            .catch(error =>
                error.response ? {
                    "res": error.response,
                    "status": "error"
                } : {
                    "res": "unexpected error occured",
                    "status": "error"
                }
            );
    }
}
