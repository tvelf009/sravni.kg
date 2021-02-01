
export interface Purposes{
    id: number;
    name: string;
}

export interface Currency{
    id: number;
    name: string;
}

export interface Term{
    id: number;
    name: string;
}

export interface Credit{
    id: number;
    title: string;
    description: string;
    partner: Partner;
    payment: Payment;
    documents: Documents[];
}

export interface Partner{
    id: number;
    name: string;
    logo: string
}

export interface Payment{
    percentRate: number;
    effectiveRate: number;
    commission: number;
    monthlyPayment: number;
    percentPayment: string;
}

export interface Documents{
    id: number;
    name: string;
}

export interface SearchCondition{
    amount: number;
    purposeId: number;
    term: number;
    currency: number;
}

export interface Credits{
    title: string;
    partner: Partner;
    condition: Condition;
    purposes: IdName[];
    description: string;
    requirement: Requirement;
    documents: IdName[];
    partnerCreditUrl: string;
}



export interface Requirement{
    ageLimit: Limits;
}

export interface IdName{
    id: number;
    name: string
}

export interface BestOffers{
    title: string;
    partner: Partner;
    condition: Condition;

}

export interface Condition{
    generalLimits: GeneralLimits[];
    pledges: IdName[];
    receiveTypes: IdName[];
}

export interface GeneralLimits{
    amountLimit: Limits;
    rateLimit: Limits;
    currency: Currency;
    termLimit: Limits;
}

export interface Currency{
    code: string;
}

export interface Limits{
    max: number;
    min: number;
}


export interface PayDetail{
    monthlyPayment: number;
    percentPayment: number;
    creditPayment: number;
    debt: number;
}