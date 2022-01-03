describe('Type validation', () => {
    it('should multiply if 1st even, else if 1st odd - plus, else type error ', () => {
        expect(sumAndRes(2, 2)).to.equal(4);
        expect(sumAndRes(3, 5)).to.equal(8);
        expect(sumAndRes("qda", 4)).to.equal("Error");
    })
})
describe('axis type', () => {
    it('should find type of axis', () => {
        expect(quatResolver(2, 2)).to.equal(1 + ' quater');
        expect(quatResolver(-1, 4)).to.equal(4 + ' quater');
        expect(quatResolver("qda", 4)).to.equal("Error");
        expect(quatResolver(0, 0)).to.equal("Center");
    })
})
describe('sum of elements with 3 number in(100-999)', () => {
    it('should give res of array sum ', () => {
        expect(firstThree([1, 2, 3, 200, 300, 500, 800, -3])).to.equal(1800);
        expect(firstThree([1, 2, 3, 100, -100, 500,-3])).to.equal(600);
        expect(firstThree([1, 2, -1,-3])).to.equal(0);
        expect(firstThree([1, 2, -1,"string"])).to.equal(0);
    })
})
describe('(max(a*b*c, a+b+c))+3', () => {
    it('should multiply if 1st even, else if 1st odd - plus, else type error ', () => {
        expect(maxValue(2,2,5)).to.equal(23);
        expect(maxValue(0,1,5)).to.equal(9);
        expect(maxValue(1,4,-7)).to.equal(1);
    })
})
describe('rating student', () => {
    it('should return nuber by cases', () => {
        expect(rating(0)).to.equal('Your mark is F');
        expect(rating(5)).to.equal('Your mark is F');
        expect(rating(19)).to.equal('Your mark is F');
        expect(rating(20)).to.equal('Your mark is E');
        expect(rating(25)).to.equal('Your mark is E');
        expect(rating(39)).to.equal('Your mark is E');
        expect(rating(40)).to.equal('Your mark is D');
        expect(rating(45)).to.equal('Your mark is D');
        expect(rating(59)).to.equal('Your mark is D');
        expect(rating(60)).to.equal('Your mark is C');
        expect(rating(65)).to.equal('Your mark is C');
        expect(rating(74)).to.equal('Your mark is C');
        expect(rating(75)).to.equal('Your mark is B');
        expect(rating(80)).to.equal('Your mark is B');
        expect(rating(89)).to.equal('Your mark is B');
        expect(rating(90)).to.equal('Your mark is A');
        expect(rating(95)).to.equal('Your mark is A');
        expect(rating(100)).to.equal('Your mark is A');
        expect(rating('string')).to.equal(`Your string isn't valid value`);
    })
})