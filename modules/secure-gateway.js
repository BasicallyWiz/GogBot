const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const {SessionClient} = require('dialogflow');

exports.dialogflowGateway = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const { queryInput, sessionId } = request.body;
        
        const sessionClient = new SessionClient({credentials: serviceAccount});
        const session = sessionClient.sessionPath('i-19-vujl')
    });
});