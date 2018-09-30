export default function getStepsFromDays(days, step = 3) {
  return (
    (24 / step) * days -
    Math.floor(new Date().getHours() / step)
  );
}
