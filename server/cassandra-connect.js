import { Client } from "cassandra-driver";

export class Database {
  constructor() {
    this.client = new Client({
      cloud: {
        secureConnectBundle: "/Users/DarshGondalia/Desktop/BlogSpot/secure-connect-blogapptest.zip",
      },
      credentials: {
        username: "RgeKPZzfZsWGCuRtUMvzDgZt",
        password: "vuKzxJOp87em7Bdc-ZQp_Cte5yOpCnEoWenCOkRYuXc5T.K7jRvMBhZAFtLjpBHoMBLdoz89_pQA2Du4nE9QH3lgeJ-BQbHZ6U1FF6ETKlyTtNFX,yrnsB8NSCA3bZcF",
      },
    });
    try{
      this.tryConnect();
    }catch(err){
      console.log(err);
    }
    // await run();
  }

  async tryConnect(){
    await this.client.connect();
  }
  
  async createUser (username, password, first_name, last_name, email) {
    const queryString = 'SELECT * FROM "TestUser".users WHERE username='+ "'" + username + "' AND email='" + email + "' ALLOW FILTERING";
    const find = await this.client.execute(queryString);
    if(find.rowLength === 0){
      const registerQueryString = 'INSERT INTO "TestUser".users (username, password, first_name, last_name, email) VALUES ' + "( '"+ username+"', '"+ password+"', '"+ first_name+"', '"+ last_name +"', '"+ email+"')" +"IF NOT EXISTS";     
      const response = await this.client.execute(registerQueryString);
      return "connect";
    }
  }

  async login(username, password){
    const queryString = 'SELECT * FROM "TestUser".users WHERE username='+ "'" + username + "' AND password='" + password + "' ALLOW FILTERING";
    const find = await this.client.execute(queryString);
    console.log(find);
    if(find.rowLength === 1){
      return find;
    }
  }

  async postUpload(username, date, post_title, post_details){
    const queryString = 'INSERT INTO "TestUser".post_by_id (username, date, post_title, post_details) VALUES ' + "( '"+ username+"', '"+ date+"', '"+ post_title+"', '"+ post_details +"')" +"IF NOT EXISTS";     
    const response = await this.client.execute(registerQueryString);
    return "connect";
  }

}

export default { Database };