import { FilterParams } from "../../dtos/filter-params.interface";
import { ParseFilter, ParseFilterOperators } from "../parse-filter"

describe('Test Parse Filter', () => {
    it('sould be successful if the operator is CONTAINS', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'CONTAINS',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ name: /teste/i }))
    });

    it('sould be successful if the operator is NOT_CONTAINS', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'NOT_CONTAINS',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ name: expect.objectContaining({"$not": /teste/i}) }))
    });

    it('sould be successful if the operator is EQUAL', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'EQUAL',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ name: "teste" }))
    });

    it('sould be successful if the operator is NOT_EQUAL', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'NOT_EQUAL',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ name:expect.objectContaining({"$ne": "teste"}) }))
    });

    it('sould be successful if the operator is HAD', () => {
        const params = {
            type: 'operator',
            column: 'clicks',
            operator: 'HAD',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ clicks:expect.objectContaining({"$gt": 0}) }))
    });

    it('sould be successful if the operator is NOT_HAD', () => {
        const params = {
            type: 'operator',
            column: 'clicks',
            operator: 'NOT_HAD',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ clicks: 0 }))
    });

    it('sould be successful if the operator is IS_FILLED', () => {
        const params = {
            type: 'operator',
            column: 'clicks',
            operator: 'IS_FILLED',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ clicks: expect.objectContaining({"$ne": null}) }))
    });

    it('sould be successful if the operator is IS_NOT_FILLED', () => {
        const params = {
            type: 'operator',
            column: 'name',
            operator: 'IS_NOT_FILLED',
            value: 'teste'
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ name: null }))
    });

    it('sould be successful if the operator is IS_GREATER_THAN', () => {
        const params = {
            type: 'operator',
            column: 'sends',
            operator: 'IS_GREATER_THAN',
            value: 0
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ sends: expect.objectContaining({"$gt": 0}) }))
    });

    it('sould be successful if the operator is IS_LESS_THAN', () => {
        const params = {
            type: 'operator',
            column: 'sends',
            operator: 'IS_LESS_THAN',
            value: 10
        } as FilterParams
        const parseFilter = new ParseFilter();
        expect(parseFilter.parse(params)).toEqual(expect.objectContaining({ sends: expect.objectContaining({"$lt": 10}) }))
    });
})