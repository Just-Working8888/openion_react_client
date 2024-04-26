import { CancelToken } from 'axios';
import { instance } from './index'
import { Quetions } from 'types/types';

const getQuetions = (
    sourceToken?: CancelToken
) =>
    instance.get<Quetions[]>(
        `items`,
        { cancelToken: sourceToken }
    );

const getQuetionsById = (id?: number, sourceToken?: CancelToken) =>
    instance.get<Quetions>(`/items/${id}`, {
        cancelToken: sourceToken,
    });


const endpoints = {
    getQuetions,
    getQuetionsById
};
export default endpoints;