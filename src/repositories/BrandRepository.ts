import { EntityRepository, Repository } from "typeorm";
import Brand from "../models/Brand";

@EntityRepository(Brand)
class BrandRepository extends Repository<Brand> {}

export default BrandRepository;
