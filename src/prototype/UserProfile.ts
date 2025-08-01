import { UserProfilePrototype } from "./UserProfilePrototype";

type Department = "finance" | "engineering" | "marketing";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {}

  clone(): UserProfilePrototype {
    const copiedPermissions = { ...this.permissions };
    return new UserProfile(this.username, this.department, copiedPermissions);
  }
}
