const {
    MongoClient,
    ObjectID
} = require('mongodb');

const url = 'mongodb://192.168.99.27017';
const connection = MongoClient.connect(url, { useNewUrlParser: true });
async function getCollection(c) {
    return connection
        .then(client => client.db('flowersapp'))
        .then(db => db.collection(c));
}

exports.getFlowers = async function () {
    const coll = await getCollection('flowers');
    const flowers = await coll.find({}).toArray();
    return flowers;
}

exports.getflower = async function (flowerid) {
    const coll = await getCollection('flower');
    const flower = await coll.findOne({}, { _id: ObjectID(flowerid) });
    return flower;
}

