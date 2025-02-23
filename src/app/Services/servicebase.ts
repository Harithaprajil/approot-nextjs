
export abstract class ServiceBase{
   static API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

   static getUrl(path:string){
    return `${this.API_URL}${path}`;
   }
}