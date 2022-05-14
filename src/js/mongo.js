import * as Realm from 'realm-web';

const app = new Realm.App({ id: "live-scorecard-xvtgo" });
const credentials = Realm.Credentials.anonymous();
const mongo = app.currentUser.mongoClient('WDBCluster');

export async function logIn() {
    try {
        return await app.logIn(credentials);
    } catch (err) {
        console.error("Failed to log in", err);
    }
}

export async function query(course){
    let collection = mongo.db('club_info').collection('info');
    let courseInfo = await collection.findOne({ 'course-name': course });
    console.log('courseInfo is: ', courseInfo);
}