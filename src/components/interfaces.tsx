export interface CountryData {
    
   name: string,
   toplevelDomain: [string],
   alpha2Code: string,
   alpha3Code: string,
   callingCodes: [string],
   capital: string,
   altSpelling: [string],
   region: string,
   subregion: string,
   population: number,
   latlng: [number],
   demonym: string,
   area: number,
   gini: number,
   timezones: [string],
   border: [string],
   nativeName: string,
   numericCode: string,
   currencies: [{}],
   languages: [{}],
   translations: {},
   flag: string,
   regionalBlocs: [{}]
  }

  interface ServiceLoading {
    status: 'loading';
  }
  interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
  }
  interface ServiceError {
    status: 'error';
    error: Error;
  }
  export type Service<T> =
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;