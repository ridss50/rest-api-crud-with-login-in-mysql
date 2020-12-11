const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration (name,email,password,mobile)values(?,?,?,?)`,

      [data.name, data.email, data.password, data.mobile],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(`select * from registration`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,name,email,password,mobile from registration where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateUsers: (data, callBack) => {
    pool.query(
      `update registration set name=?, email=?, password=?, mobile=? where id=?`,
      [data.name, data.email, data.password, data.mobile],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
