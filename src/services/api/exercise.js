import { api } from '../api';
export const exerciseApi = api.injectEndpoints({ endpoints: build => ({ getExercises: build.query({ query: () => api.get('/exercises') }), getExerciseById: build.query({ query: id => api.get(`/exercises/${id}`) }), startExercise: build.mutation({ query: id => ({ url: `/exercises/${id}/start`, method: 'POST' }) }), submitExercise: build.mutation({ query: (id, answers) => ({ url: `/exercises/${id}/submit`, method: 'POST', body: answers }) }), getProgress: build.query({ query: () => api.get('/exercises/progress') }) }) });
export const { useGetExercisesQuery, useGetExerciseByIdQuery, useStartExerciseMutation, useSubmitExerciseMutation, useGetProgressQuery } = exerciseApi; 
export const exerciseService = {
    getExercises: () => api.get('/exercises'),
    getExerciseById: (id) => api.get(`/exercises/${id}`),
    startExercise: (id) => api.post(`/exercises/${id}/start`),
    submitExercise: (id, answers) => api.post(`/exercises/${id}/submit`, answers),
    getProgress: () => api.get('/exercises/progress')
};
