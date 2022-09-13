import { FilterParams, FilterTOperator } from "../dtos/filter-params.interface";

export class ParseFilterInMemory {
    public parseArray(params: FilterParams[]){
        // return params.map(this.parse)
    }

    public parse(param: FilterParams, field: string) {
        switch(param.type) {
            case 'operator':
                return ParseFilterOperatorsInMemory.parse(param, field);
        }
    }

}

export class ParseFilterOperatorsInMemory {
    static parseContains(param: FilterParams, field: string) {
        return `${field}.${[param.column]}.indexOf(${param.value}) > -1`;
    }
    static parseNotContains(param: FilterParams, field: string) {
        return  `${field}.${[param.column]}.indexOf(${param.value}) === -1`;
    }
    static parseEqual(param: FilterParams, field: string) {
        return `${field}.${[param.column]} === ${param.value}`;
    }
    static parseNotEqual(param: FilterParams, field: string) {
        return `${field}.${[param.column]} !== ${param.value}`;
    }
    static parseIsFilled(param: FilterParams, field: string) {
        return `!!${field}.${[param.column]}`;
    }
    static parseNotFilled(param: FilterParams, field: string) {
        return `!${field}.${[param.column]}`;
    }
    static parseHad(param: FilterParams, field: string) {
        return `!${field}.${[param.column]} > 0`;
    }
    static parseNotHad(param: FilterParams, field: string) {
        return  `!${field}.${[param.column]} === 0`;
    }
    static parseIsGreaterThan(param: FilterParams, field: string) {
        return `!${field}.${[param.column]} > ${param.value}`;
    }

    static parseIsLessThan(param: FilterParams, field: string) { 
        return `!${field}.${[param.column]} < ${param.value}`; 
    }

    public static parse(param: FilterParams, field: string) {
        switch(param.operator) {
            case FilterTOperator.CONTAINS:
                return this.parseContains(param, field);
            case FilterTOperator.NOT_CONTAINS:
                return this.parseNotContains(param, field);
            case FilterTOperator.EQUAL:
                return this.parseEqual(param, field);
            case FilterTOperator.NOT_EQUAL:
                return this.parseNotEqual(param, field);
            case FilterTOperator.HAD:
                return this.parseHad(param, field);
            case FilterTOperator.NOT_HAD:
                return this.parseNotHad(param, field);
            case FilterTOperator.IS_FILLED:
                return this.parseIsFilled(param, field);
            case FilterTOperator.IS_NOT_FILLED:
                return this.parseNotFilled(param, field);
            case FilterTOperator.IS_GREATER_THAN:
                return this.parseIsGreaterThan(param, field);
            case FilterTOperator.IS_LESS_THAN:
                return this.parseIsLessThan(param, field);
        }
    }
}