// StoredData.js
const StoredData = (() => {
  return {
    set: (key, value) => {
      try {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key, stringifiedValue);
        console.log(`StoredData.set: ${key} = ${stringifiedValue}`);
      } catch (error) {
        console.error('Error storing data:', error);
      }
    },
    get: (key) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error(`Error getting data for ${key}:`, error);
        return null;
      }
    },
    getAll: () => {
      const allData = {};
      Object.keys(localStorage).forEach((key) => {
        try {
          const value = JSON.parse(localStorage.getItem(key));
          allData[key] = value;
        } catch (error) {
          console.error(`Error parsing data for ${key}:`, error);
        }
      });
      console.log('StoredData.getAll:', allData);
      return allData;
    },
  };
})();

export default StoredData;