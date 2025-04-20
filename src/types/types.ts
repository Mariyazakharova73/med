export enum PositionType {
  ADMINISTRATIVE = 'administrative',
  MEDICAL = 'medical'
}

export enum RoleName {
  CHIEF = 'chief',
  DOCTOR = 'doctor',
  ADMINISTRATOR = 'administrator',
  SECRETARY = 'secretary'
}

export enum UserStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  DISMISSED = 'dismissed'
}

export enum DepartmentValue {
  SURGERY = 'surgery',
  THERAPY = 'therapy',
  ACCOUNTING = 'accounting'
}

export interface LabelValue<T = string> {
  value: T;
  label: string;
}

export type DepartmentOption = LabelValue<DepartmentValue>;

export type UserStatusOption = LabelValue<UserStatus>;

export interface PositionBase extends LabelValue<string> {
  type: PositionType;
}

export type AdministrativePosition = PositionBase & { type: PositionType.ADMINISTRATIVE };
export type MedicalPosition = PositionBase & { type: PositionType.MEDICAL };

export interface User {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phone: string;
  department: DepartmentOption;
  status: UserStatus;
  roles: RoleName[];
  administrative_position: AdministrativePosition | null;
  medical_position: MedicalPosition | null;
  is_simple_digital_sign_enabled: boolean;
  created_at: number;
  updated_at: number;
  hired_at: number;
  fired_at: number | null;
  email_verified_at: number | null;
}

export type LabelPosition = 'top' | 'left';


export interface UserFormValues  {
  name: string;
  surname: string;
  patronymic: string;
  administrative_position: string;
  medical_position: string;
  department: string;
  phone: string;
  email: string;
  hired_at: number | null;
}