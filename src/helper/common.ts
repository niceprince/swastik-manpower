export function throttle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
) {
  let isCallAvailable = true;

  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined | unknown {
    if (!isCallAvailable) return;

    isCallAvailable = false;

    let result;

    setTimeout(() => {
      isCallAvailable = true;
      result = callback.apply(this, args);
    }, delay);

    return result;
  };
}

export const scrollToSection = (hash: string) => {
  if (!hash) return;

  const id = hash.replace("/#", "");
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
