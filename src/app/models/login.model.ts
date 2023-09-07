export interface LoginDataResponse {
  data: {};
  message: string;
  success: boolean;
}

export interface Login2fa {
  "2fa_token": string;
  verification_code: string;
}

export interface Body2fa {
  code?: string;
  country_code: string;
  lang: string;
  phone: string;
  type_message: string;
}
export interface Body2faValid {
  "2fa_token": string;
  verification_code: string;
}

export interface LoginBody {
  country_code: string;
  password: string;
  phone: string;
  type_message: string;
}
