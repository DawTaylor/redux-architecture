export const Auth = () => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const nextPage = `${action.payload.location.pathname}${
      action.payload.location.search
    }`;
    console.log({ nextPage });
  }
  return next(action);
};
