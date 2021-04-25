export default ({ hasTeachingAssistant, classList }) => {
  let rest;
  if (hasTeachingAssistant) {
    [, , ...rest] = classList;
  } else {
    [, ...rest] = classList;
  }

  return rest;
};
