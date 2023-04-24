export default class BaseCanvasAPIReciverService {
  url: string = "https://fhict.instructure.com";
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}