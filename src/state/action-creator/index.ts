import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import apiClient from '../../apis/api-client';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await apiClient.get('/search', {
        params: {
          text: term,
        },
      });
      const names = data.objects.map((ob: any) => ob.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
