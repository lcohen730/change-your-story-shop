import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function makeGuest() {
    return sendRequest(`${BASE_URL}/guest`, 'POST')
}