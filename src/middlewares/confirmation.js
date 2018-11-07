const confirmation = store => next => action => {
  const shouldConfirm = action.meta && action.meta.shouldConfirm;

  if (!shouldConfirm) return next(action);

  const shouldProceed = window.confirm('Are you sure?');

  if (shouldProceed) next(action);
};

export default confirmation;
