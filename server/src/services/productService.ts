import type { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";

export class ProductQueryBuilder {
  private where: any = {};
  private orderBy: any = {};
  private skip = 0;
  private take = 20;
  private include: Prisma.ProductInclude = {};
  filterByStatus(status: string, operator: "IS" | "NOT") {
    this.where.status = operator === "IS" ? status : { not: status };
    return this;
  }

  sortBy(field: string, direction: "asc" | "desc") {
    this.orderBy[field] = direction;
    return this;
  }

  paginate(page: number, limit: number) {
    this.skip = (page - 1) * limit;
    this.take = limit;
    return this;
  }
  with(relation: Prisma.ProductInclude) {
    this.include = relation;
    return this;
  }
  async execute() {
    return prisma.product.findMany({
      where: this.where,
      orderBy: this.orderBy,
      //   skip: this.skip,
      //   take: this.take,
      include: this.include,
    });
  }
}
