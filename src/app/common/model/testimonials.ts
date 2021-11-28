export class Testimonials{
  company: string;
  user: string;
  content: string;

   constructor(_user, _content, _company) {
     this.user = _user;
     this.company = _company;
     this.content = _content
   }
}
