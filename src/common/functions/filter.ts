import { isArray, isBoolean, isNumber } from "lodash";

export type ArrayFilterType = (number | string)[];

type FilterValue<T> = { value: T };

type BooleanFilter = FilterValue<boolean>;
type ArrayFilter = FilterValue<ArrayFilterType>;

export type FilterType = BooleanFilter | ArrayFilter;

const createFilterFunction =
  <T extends FilterType>() =>
  (value: T["value"]) => ({ value });

const createBooleanFilter = createFilterFunction<BooleanFilter>();
const createArrayFilter = createFilterFunction<ArrayFilter>();

export const filterObject =
  <T, K extends keyof T>(object: T) =>
  ([key, filter]: [K, FilterType]) => {
    const value = object[key];

    if (value === undefined) {
      return false;
    }

    if (isBoolean(value) && isBoolean(filter.value)) {
      return filter.value ? value === filter.value : true;
    } else if ((isNumber(value) || value === null) && isArray(filter.value)) {
      return filter.value.length === 0 ? true : filter.value.includes(Math.floor(value ?? 0));
    } else if (isArray(value) && isArray(filter.value)) {
      const mappedValue = value.map((v) => v as string);
      return filter.value.every((v) => mappedValue.includes(v as string));
    }

    return false;
  };

export const createFilterByType = <T, K extends keyof T>(value: T[K]) => {
  if (isBoolean(value)) {
    return createBooleanFilter(value);
  } else if (isArray(value)) {
    return createArrayFilter(value);
  }
};

export type FilterConfig<FK extends string> = Partial<Record<FK, FilterType>>;
