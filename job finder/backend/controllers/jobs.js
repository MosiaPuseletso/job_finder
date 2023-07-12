import axios from 'axios';

export const getJobs = (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://arbeitnow.com/api/job-board-api',
        headers: {}
    };

    axios.request(config)
        .then((response) => {
           res.send(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}