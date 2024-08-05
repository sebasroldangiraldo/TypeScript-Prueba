export interface IPost {
    title:                    string;
    body:                     string;
    creationDate:             Date;
    platform:                 string;
    postUrl:                  string;
}

export interface IPostResponse {
    id:                       number;
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             Date;
    estimatedPublicationDate: Date;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
    deletedAt:                null;
}


export interface ICreator {
    id:       number;
    email:    string;
    password: string;
}