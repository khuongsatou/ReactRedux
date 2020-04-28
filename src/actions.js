export const REQUEST_HELLOWORLD = 'REQUEST_HELLOWORLD';
export const RECEIVE_HELLOWORLD = 'RECEIVE_HELLOWORLD';

export const request_helloworld = () => ({
  type: REQUEST_HELLOWORLD,
});

export const receive_helloworld = text => ({
  type: RECEIVE_HELLOWORLD,
  text,
});
