const WPM = 225;

export const calculateReadingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / WPM);
};
