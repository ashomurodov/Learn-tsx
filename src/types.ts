export namespace IEntity {
  export type User = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  } | null;
}

export namespace IApi {
  export namespace Auth {
    export namespace Register {
      export interface Request {
        name: string;
        email: string;
        password: string;
      }
      export interface Response {}
    }
  }
}
