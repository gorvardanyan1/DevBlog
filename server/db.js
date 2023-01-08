export async function insertUser(db, blogDb, collname, obj) {
    let res = await blogDb.collection(collname).insertOne(obj)
    db.close()
    return res
}
export async function findBlogs(db, blogDb, collname, query = {}) {
    let res = await blogDb.collection(collname).find(query, { projection: { password: 0 } }).toArray()
    db.close()
    return res
}
export async function findBlog(db, blogDb, collname, query = {}) {
    let res = await blogDb.collection(collname).findOne(query, { projection: { password: 0 } })
    db.close()
    return res
}