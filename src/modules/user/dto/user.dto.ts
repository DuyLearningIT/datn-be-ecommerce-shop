
export type UserCreateDto = {
    email: string,
    password: string,
}

export type UserChangePasswordDto = {
  id: number, 
  password: string, 
  new_password: string
}

export type UserUpdateDto = {
  user_id: number,
  full_name?: string,
  address?: string,
  phone_number? : string,
  avatar_url? : string,
}

export type UserLoginDto = {
  email: string, 
  password: string
}

