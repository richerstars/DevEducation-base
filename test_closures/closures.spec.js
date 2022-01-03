describe('Closures', () => {

    describe('accept array and return string', () => {
        it('should return string YES or NO', () => {
            expect(tickets([25, 25, 50])).to.equal('YES');
            expect(tickets([25, 100])).to.equal('NO');
            expect(tickets([25, 25, 50, 100])).to.equal('YES');
            expect(tickets(['25', '25', '50', '100'])).to.equal('NO');
        })
    })

    describe('sum of two infinite numbers', () => {
        it('should return string with number', () => {
            expect(getSum('11111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333')).to.equal(3.444444444444444e+49);
        })
    })
    describe('the function should return posts and commets by Rimus', () => {
        it('should return object with count of comments', () => {
            expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).to.eql({ post: 1, comments: 3 });
        })
    })
    describe('cashe function', () => {
        it('should return cashed value', () => {
            expect(cachedFunc('foo', 'bar')).to.equal('foobar');
            expect(cachedFunc('foo', 'bar')).to.equal('foobar');
            expect(cachedFunc('foo', 'baz')).to.equal('foobaz');
        })
    })
});