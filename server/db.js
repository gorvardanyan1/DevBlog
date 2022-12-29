

export async function insertUser(db, blogDb, collname, obj) {
    let res = await blogDb.collection(collname).insertOne(obj)
    db.close()
    return res

}
