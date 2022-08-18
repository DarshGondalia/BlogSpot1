import { Client } from "cassandra-driver";
import { query } from "express";

export class Database {
  constructor() {
    this.client = new Client({
      cloud: {
        secureConnectBundle: "c:/individual projects/blogspot/secure-connect-blogapptest.zip",
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
  
  async createUser (username, password, fullname, email, phone) {
    const queryString = 'SELECT * FROM "testUser2".users WHERE username='+ "'" + username + "' AND email='" + email + "' ALLOW FILTERING";
    const find = await this.client.execute(queryString);

    if(find.rowLength === 0){
      const registerQueryString = 'INSERT INTO "testUser2".users (id, username, password, fullname, email, phone, followers) VALUES ' + "(uuid(), '"+ username+"', '"+ password+"', '"+ fullname+"', '"+ email+ "', '"+ phone+"', NULL)" +"IF NOT EXISTS";     
      const response = await this.client.execute(registerQueryString);
      return "connect";
    }
  }

  async login(username, password){
    const queryString = 'SELECT * FROM "testUser2".users WHERE username='+ "'" + username + "' AND password='" + password + "' ALLOW FILTERING";
    const find = await this.client.execute(queryString);
    console.log(find);
    if(find.rowLength === 1){
      return find;
    }
  }

  async postBlog(username, posttitle, postdescription, postkeywords, postcontent){
    const queryString = 'INSERT INTO "testUser2".posts (id, time, username, posttitle, postdescription, postkey, postcontent, convertedtime) VALUES ' + "(uuid(), now(), '"+ username+"', '"+ posttitle+"', '"+ postdescription+"', '"+ postkeywords +"', '"+ postcontent + "', toTimestamp(now()))" +" IF NOT EXISTS";     
    const response = await this.client.execute(queryString);
    console.log(response);
    return "connect";
  }

  async getAllBlogs(){
    const queryString = 'SELECT * FROM "testUser2".posts';
    const response = await this.client.execute(queryString);
    return response;
  }

}

export default { Database };