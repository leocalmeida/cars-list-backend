import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import Admin from "../../models/Admin";
import authConfig from "../../config/auth";
import { sign } from "jsonwebtoken";

interface Request {
  email: string;
  password: string;
}

interface Reponse {
  admin: Admin;
  token: string;
}

class AuthenticatedAdminService {
  public async execute({ email, password }: Request): Promise<Reponse> {
    const adminRepository = getRepository(Admin);

    const admin = await adminRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!admin) {
      throw new Error("Incorrect email/password combination ");
    }
    const matchedPassword = await compare(password, admin.password);

    if (!matchedPassword) {
      throw new Error("Incorrect email/password combination ");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: admin.email,
      expiresIn: expiresIn,
    });

    return {
      admin,
      token,
    };
  }
}

export default AuthenticatedAdminService;
