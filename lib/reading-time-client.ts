import readingTime from "reading-time";

export const calculateReadingTime = (text: string) => {
  return readingTime(text).text;
};
