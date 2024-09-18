const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// We want to mock the 'callback'

export default forEach;