// const db = ('')

const find = () => {
    return db('users').select("id", "username", "password", "phone_number")
}

const findByID = async (id) => {
    return await db('users').where({ id }).first();
  };

  const findByUsername = async (username) => {
    return await db('users').where({ username }).first();
  };

 const findBy = (filter) => {
    return db("users")
      .select("id", "username", "password", "phone_number")
      .where(filter)
  }

  const addUser = async (user) => {
    return await db('users')
      .insert(user, 'id')
      .then(([id]) => findByID(id));
  };

  const updateUser = (id, user) => {
      return db('users')
        .where({id})
        .update(user)
  }

module.exports = {
    find,
    findByID,
    findByUsername,
    findBy,
    addUser,
}