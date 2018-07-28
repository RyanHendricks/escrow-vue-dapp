import { filter } from 'lodash';

export const events = state => filter(state.contract.abi, e => e.type === 'event');

export const functions = state => filter(state.contract.abi, e => e.type === 'function');

export const constantFunctions = state => filter(state.contract.abi, e => e.constant === true);
