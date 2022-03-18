const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host:"192.168.0.4",
        user:"root",
        password:"root",
        database:"basedatos_estudiosconexion",
        port:"3306"
    })
    
    async function main(){
        try{
            let conn = await pool.getConnection();
            let rows = await conn.query("SELECT * FROM cregdata015_2018");
            console.log(rows);
        }catch(err){
            console.log(err)
        }
    }
    
    main()

