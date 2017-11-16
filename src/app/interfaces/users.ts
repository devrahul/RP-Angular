import {Address} from './address';
import { Geo} from './geo';
export interface Users {
	"id": number ,
    "name": string,
    "username": string,
    "email": string,
    "address": Address[],
     "geo": Geo[]
}
