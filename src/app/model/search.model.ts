export interface Bio {
    name: string;
    email: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    about: string | null;
}

export class Profile {
    constructor(
        public bio: Bio,
        public username: string,
        public avatar: string,
        public id_link: string,
        public updated: Date,
        public followers: number,
        public star_count: any
    ){}
}