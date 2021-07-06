
const updateDietaries = (dietaries, dietariesToBeUpdated, value) => {
    dietariesToBeUpdated.forEach(dietary => {
        if (dietaries.has(dietary)) {
            dietaries.set(dietary, dietaries.get(dietary) + value);
        } else {
            dietaries.set(dietary, value);
        }
    });
    return dietaries;
}

module.exports = updateDietaries;