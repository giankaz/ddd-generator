import { FilterParams, FilterTOperator } from "../dtos/filter-params.interface";

export class ParseFilter {
    public parseArray(params: FilterParams[]){
        return params.map(this.parse)
    }

    public parse(param: FilterParams) {
        switch(param.type) {
            case 'operator':
                return ParseFilterOperators.parse(param);
        }
    }

}

export class ParseFilterOperators {
    static parseContains(param: FilterParams) {
        return { [param.column]:  new RegExp(`${param.value}`, 'i')}
    }
    static parseNotContains(param: FilterParams) {
        return { [param.column]:  { $not: new RegExp(`${param.value}`, 'i')}}
    }
    static parseEqual(param: FilterParams) {
        return { [param.column]: param.value };
    }
    static parseNotEqual(param: FilterParams) {
        return { [param.column]: { $ne: param.value } };
    }
    static parseIsFilled(param: FilterParams): any {
        return { [param.column]: { $ne: null } };
    }
    static parseNotFilled(param: FilterParams): any {
        return { [param.column]: null  }
    }
    static parseHad(param: FilterParams) {
        return { [param.column]: { $gt: 0} };
    }
    static parseNotHad(param: FilterParams) {
        return  { [param.column]: 0 };
    }
    static parseIsGreaterThan(param: FilterParams) {
        return { [param.column]: { $gt: param.value } };
    }

    static parseIsLessThan(param: FilterParams) { 
        return { [param.column]: { $lt: param.value } }; 
    }

    public static parse(param: FilterParams) {
        switch(param.operator) {
            case FilterTOperator.CONTAINS:
                return this.parseContains(param);
            case FilterTOperator.NOT_CONTAINS:
                return this.parseNotContains(param);
            case FilterTOperator.EQUAL:
                return this.parseEqual(param);
            case FilterTOperator.NOT_EQUAL:
                return this.parseNotEqual(param);
            case FilterTOperator.HAD:
                return this.parseHad(param);
            case FilterTOperator.NOT_HAD:
                return this.parseNotHad(param);
            case FilterTOperator.IS_FILLED:
                return this.parseIsFilled(param);
            case FilterTOperator.IS_NOT_FILLED:
                return this.parseNotFilled(param);
            case FilterTOperator.IS_GREATER_THAN:
                return this.parseIsGreaterThan(param);
            case FilterTOperator.IS_LESS_THAN:
                return this.parseIsLessThan(param);
        }
    }
}