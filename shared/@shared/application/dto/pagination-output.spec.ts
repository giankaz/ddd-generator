import { FilterParams } from "../../domain/dtos/filter-params.interface";
import { SearchResult } from "../../domain/repository/repository-contracts";
import { PaginationOutputMapper } from "./pagination-output";

describe("PaginationOutputMapper Unit Tests", () => {
  it("should convert a SearchResult in output", () => {
    const result = new SearchResult({
      items: ["fake"] as any,
      total: 1,
      current_page: 1,
      per_page: 1,
      sort: "name",
      sort_dir: "desc",
      filter: {
        type: 'operator',
        column: 'name',
        operator: 'CONTAINS',
        value: 'teste'
      } as FilterParams,
    });
    const output = PaginationOutputMapper.toOutput(result.items, result);
    expect(output).toStrictEqual({
      items: ['fake'],
      total: 1,
      current_page: 1,
      last_page: 1,
      per_page: 1,
    });
  });
});