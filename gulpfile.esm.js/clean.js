import { deleteAsync } from 'del';

import { CONSTS } from './CONSTS';
const { APPSERVER_DEST, DEPLOY_DEST } = CONSTS;

function clean() {
    return deleteAsync([APPSERVER_DEST, DEPLOY_DEST]);
}

export { clean };
