import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import Admin from "../../models/Admin";

interface Request {
  email: string;
  password: string;
}

class CreateAdminService {
  public async execute({ email, password }: Request): Promise<Admin> {
    const adminRepository = getRepository(Admin);

    const checkAdminExists = await adminRepository.find({
      where: {
        email: email,
      },
    });

    if (!checkAdminExists) {
      throw new Error("Admin already exists");
    }

    const hashedPassword = await hash(password, 8);

    const admin = adminRepository.create({
      email,
      password: hashedPassword,
    });

    await adminRepository.save(admin);

    return admin;
  }
}

export default CreateAdminService;
