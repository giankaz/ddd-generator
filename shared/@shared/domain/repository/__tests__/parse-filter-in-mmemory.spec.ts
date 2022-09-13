import { FilterParams } from "../../dtos/filter-params.interface";
import { ParseFilterInMemory } from "../parse-filter-in-memory";

describe('Teste Parse filter in memory', () => {
    it('sould be successful if the operator is CONTAINS', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'CONTAINS',
            value: 'teste'
        } as FilterParams;

        const field = 'campaigns';

        const parseFilter = new ParseFilterInMemory();
        expect(parseFilter.parse(params, field)).toEqual("campaigns.name.indexOf(teste) > -1")
    });
})