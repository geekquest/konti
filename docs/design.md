# Konti Design


## Data Model


```ts

const ContributionChannel  = "airtel-money" | "tnm-mpamba" | "cash" | "nbm-mo626" | "fdh-522" | "nbs-322" | "other";

interface Person {
    name: string,
    githubUsername: string,
    twitterUsername: string,
    phone: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

interface Project {
    id: string,
    name: string,
    tags: Array<string>,
    description: string,
    projectChampion: Person,
    treasurer: Person,
    startDate: Date,
    endDate?: Date,
    openToContributions: bool,
    createdAt: Date,
    updatedAt: Date,
    contributions: Array<Contribution>
}

interface SecurityContributions {
    
}

interface Contribution {
    contributedFor: Project,
    contributor: Person,
    amount: number,
    contributedOn: Date,
    contributedVia: ContributionChannel,
    acknowledged: boolean,
    createdAt: Date,    
    updatedAt: Date,
    thankYouEmailSent: boolean
}
```