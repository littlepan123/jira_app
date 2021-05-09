/*authSlice.ts*/
export interface LOGIN_USER {
  id: number;
  username: string;
}
export interface FILE extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
export interface PROFILE {
  id: number,
  user_profile: number,
  img: string | null;
}
export interface PROFILE {
  id: number;
  user_profile: number;
  img: string | null;
}
export interface POST_PROFILE {
  id: number;
  img: File | null;
}
export interface CRED {
  username: string;
  password: string;
}
export interface JWT {
  refresh: string;
  access: string;
}
export interface USER {
  id: number;
  username: string;
}
export interface AUTH_STATE {
  isLoginView: boolean;
  loginUser: LOGIN_USER;
  profiles: PROFILE[];
}

/*taskSlice.ts*/
export interface READ_TASK {
  id: number;
  task: string;
  description: string;
  criteria: string;
  status: string;
  status_name: string;
  category: number;
  category_item: string;
  estimate: number;
  responsible: number;
  responsible_username: string;
  owner: number;
  owner_username: string;
  created_at: string;
  updated_at: string;
}