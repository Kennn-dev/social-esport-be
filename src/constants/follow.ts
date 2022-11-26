// * 3 status
//  * 0 : not relationship
//  * 1 : you are following them
//  * 2 : they are follow u , and u haven't follow back yet
//  * 3 : follow each other
export enum FOLLOW_STATUS {
  INIT = 0,
  FOLLOWING = 1,
  FOLLOW_BACK = 2,
  FOLLOWED = 3,
}

export enum NOTIFICATION_TYPE {
  NONE = 0,
  POST = 1,
  LIKE = 2,
  COMMENT = 3,
  FOLLOW = 4,
}
