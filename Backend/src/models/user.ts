// src/models/user.ts
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: Date;
}

export default UserAttributes;
