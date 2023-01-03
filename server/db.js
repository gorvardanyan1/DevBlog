export async function insertUser(db, blogDb, collname, obj) {
    let res = await blogDb.collection(collname).insertOne(obj)
    db.close()
    return res
}
export async function findBlogs(db, blogDb, collname, query = {}) {
    let res = await blogDb.collection(collname).find(query, { projection: { _id: 0 } }).toArray()
    db.close()
    return res
}