import { GATEWAY_API_URL } from '../../boot/config';



export const createServiceUrl= path => createUrl(`${GATEWAY_API_URL}/${path}`);