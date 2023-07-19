export namespace iEntity {
  export interface Genres {
    _id: string;
    name: string;
  }
  export interface Movies {
    title: string;
    genre: Genres;
    dailyRentalRate: number;
    numberInStock: number;
    _id: string;
    username: string;
  }

  export type User = {
    _id: string;
    name: string;
    email: string;
  } | null;
}

export namespace iApi {
  export namespace Movies {
    export namespace List {
      export interface RequestParams {}
      export type Response = iEntity.Movies[];
    }
    export namespace Single {
      export interface RequestParams {
        movieId: string;
      }
      export type Response = iEntity.Movies;
    }
  }

  export namespace Genres {
    export namespace List {
      export interface RequestParams {}
      export type Response = iEntity.Genres[];
    }

    export namespace Single {
      export interface RequestParams {
        _id: string;
      }
      export type Response = iEntity.Genres;
    }
  }

  export namespace Auth {
    export namespace Login {
      export interface RequestParams {
        email: string;
        password: string;
      }

      export interface Response {
        data: string;
      }
    }
    export namespace Register {
      export interface RequestParams {
        email: string;
        name: string;
        password: string;
      }

      export interface Response {
        _id: string;
        name: string;
        email: string;
      }
    }
    export namespace GetMe {
      export interface RequestParams {
        accessToken: string;
      }

      export interface Response {
        _id: string;
        name: string;
        email: string;
      }
         
    }
  }
}
