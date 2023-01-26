import { MongoClient } from "mongodb"

const client = new MongoClient('mongodb://localhost:27017/')

export async function insertUser(dbName, collectionName, data) {
    await client.connect();

    const cleanup = (e) => {
        client.close()
        process.exit()
    }
    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    return await collection.insertOne(data)

}


// export async function findBlogs(db, blogDb, collname, query = {}) {
//     let res = await blogDb.collection(collname).find(query, { projection: { password: 0 } }).toArray()
//     db.close()
//     return res
// }
export async function findUser(dbName, collectionName, query) {
    await client.connect()

    const cleanup = (e) => {
        client.close()
        process.exit()
    }
    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)

    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    return await collection.findOne(query, { projection: {} })
}

export async function findBlog(db, blogDb, collname, query = {}) {
    let res = await blogDb.collection(collname).findOne(query, { projection: { password: 0 } })
    db.close()
    return res
}