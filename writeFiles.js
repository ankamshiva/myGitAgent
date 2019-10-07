const fs = require('fs-extra');

export const writeFile = async (filePath, data) => {
    try {
      await fs.outputFile(filePath, data)
    } catch (err) {
      console.error(err)
    }
  }