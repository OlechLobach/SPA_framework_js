function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString(); 
}

module.exports = getCurrentTime;