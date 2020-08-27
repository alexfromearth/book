// eslint-disable-next-line max-len
const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
export const required = (values) => {
  if (!values) {
    return 'Обязательное поле';
  }
  return undefined;
};

export const minLength = (min) => (value) => (value && value.length < min
  ? `Минимальное количество символов ${min}`
  : undefined);

export const maxLength = (max) => (value) => (value && value.length > max
  ? `Максимальное количество символов ${max}`
  : undefined);

export const minCount = (min) => (value) => (value && value < min
  ? `Минимальное количество страниц ${min}`
  : undefined);

export const maxCount = (max) => (value) => (value && value > max
  ? `Максимальное количество страниц ${max}`
  : undefined);

export const minPublishYear = (min) => (value) => {
  if (value) {
    const inputAge = new Date(value);
    if (inputAge.getFullYear() >= min) {
      return undefined;
    }
    return `Минимальный год публикации ${min}`;
  }
  return undefined;
};

export const minReleaseDate = (min) => (value) => {
  const minAge = new Date(min);
  if (value) {
    const inputDate = new Date(value);
    if (inputDate > minAge) {
      return undefined;
    }
    return `Минимальная дата выхода в тираж ${minAge.toLocaleDateString()}`;
  }
  return undefined;
};

export default composeValidators;
