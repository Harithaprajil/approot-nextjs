
export abstract class ServiceBase{
   static API_URL = process.env.NEXT_PUBLIC_API_URL || "https://secure-creativity-35fee2e16d.strapiapp.com";

   static getUrl(path:string){
    return `${this.API_URL}${path}`;
   }
}