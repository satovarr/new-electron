const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host:"192.168.0.8",
        user:"root",
        password:"root",
        database:"BaseDatos_EstudiosConexion",
        port:"3306"
    })
    
    async function main(){
        try{
            let conn = await pool.getConnection();
            let rows = await conn.query('show columns from cregdata015_2018');
            console.log(rows)
        }catch(err){
            console.log(err)
        }
    }
    
    main()

