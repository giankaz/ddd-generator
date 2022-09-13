import { FilterParams } from "../../domain/dtos/filter-params.interface";
import { SortDirection } from "../../domain/repository/repository-contracts";

export type SearchInputDto<Filter = FilterParams> = {
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: SortDirection | null;
  filter?: Filter | null;
};