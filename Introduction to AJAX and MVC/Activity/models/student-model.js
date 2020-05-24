const dbConnection = require('../resources/dbConnection');

/* Connection to MySQL DBMS */
class StudentMng{

    async getTopNStudent(N){
        /* The method retrieve the N records from the personal_info table */
        let connection = await dbConnection();
        try 
        {
            // Write your SQL here
            let sql = `SELECT * FROM personal_info LIMIT ${N}`;
            let results = await connection.query(sql);
            return results;
        } 
        catch (error) 
        {
            console.log(error);
            throw error;
        } 
    }
}

module.exports = StudentMng;
