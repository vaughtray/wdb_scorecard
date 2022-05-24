import * as Realm from 'realm-web';
// let axios = require('axios');
import axios from 'axios';

const app = new Realm.App({ id: "live-scorecard-xvtgo" });
const credentials = Realm.Credentials.anonymous();
const mongo = app.currentUser.mongoClient('WDBCluster');
let endpoint = 'https://data.mongodb-api.com/app/data-flvdq/endpoint/data/beta';
let apiKey = '';

export async function logIn() {
    try {
        return await app.logIn(credentials);
    } catch (err) {
        console.error("Failed to log in", err);
    }
}

export async function query(course) {
    // let collection = mongo.db('club_info').collection('info');
    // console.log('collection info: ', collection);
    // let courseInfo = await collection.find({ courseName: course });
    // console.log('courseInfo is: ', courseInfo);
    console.log('chosen course is: ', course);
    let data = JSON.stringify({
        "collection": "info",
        "database": "club_info",
        "dataSource": "WDBCluster",
        "projection": {
            "course-name": course
        }
    });

    let config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-flvdq/endpoint/data/beta/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': apiKey
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}