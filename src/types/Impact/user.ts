import { UserPermissions } from "./enums/UserPermissions";

export enum UserType {
    MEMBER = "MEMBER",
    MANAGER_ACCOUNT = "MANAGER_ACCOUNT",
}

export enum UserState {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    INVITED = "INVITED",
}
export type TUser = {
    Id: string;
    FirstName: string;
    LastName: string;
    Username: string;
    Type: UserType;
    State: UserState;
    Language: string;
    AccessRights: UserPermissions[];
    JoinedDate: string;
    DateLastUpdated: string;
    LastUpdatedBy: string;
    CreatedBy: string;
    Uri: string;
};
