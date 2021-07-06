import updateDietaries from './dietaries';

describe('Dietaries tests', () => {
    let dietaries = new Map();

    beforeEach(() => {
        dietaries.set('ve',6);
        dietaries.set('v',4);
        dietaries.set('n!',12);
    });

    it('updates dietaries in incremental way', () => {
        const dietariesToBeUpdated = ['ve', 'df', 'gf', 'n!'];
        const actualDietaries = updateDietaries(dietaries,dietariesToBeUpdated,1);
        expect(actualDietaries.get('ve')).toBe(7);
        expect(actualDietaries.get('v')).toBe(4);
        expect(actualDietaries.get('n!')).toBe(13);
        expect(actualDietaries.get('df')).toBe(1);
        expect(actualDietaries.get('gf')).toBe(1);
    })

    it('updates dietaries in decremental way', () => {
        const dietariesToBeUpdated = ['ve', 'df', 'gf', 'n!'];
        const actualDietaries = updateDietaries(dietaries,dietariesToBeUpdated,-1);
        expect(actualDietaries.get('ve')).toBe(5);
        expect(actualDietaries.get('v')).toBe(4);
        expect(actualDietaries.get('n!')).toBe(11);
        expect(actualDietaries.get('df')).toBe(0);
        expect(actualDietaries.get('gf')).toBe(0);
    })
})