export const getData = async (URL: string) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    //
  }
};
