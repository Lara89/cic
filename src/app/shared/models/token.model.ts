export class Token {
  id: string;
  userId: number;
  dummyToken: string;

  constructor(token?: any) {
    this.id = token.id || null;
    this.userId = token.userId || null;
    this.dummyToken = token.dummyToken || null;
  }
}
