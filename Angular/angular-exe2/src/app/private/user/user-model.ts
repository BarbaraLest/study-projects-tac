export class User{
    id!: number;
    first_name!: string;
    last_name!: string;
    avatar!: string;
    email!: string;

}

export class UserListResult {
    data!: User[];
    page!: number;
    per_page!: number;
    total!: number;
    total_pages!: number;

}


export class SingleUserResult{
    data!: User;
}

