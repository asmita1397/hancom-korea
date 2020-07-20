import { UserForm } from './UserForm';

export interface TreeUserFormData {
  name:string,
  userForms:{
    name:string,
    userForms:Array<UserForm>
  }[]
}