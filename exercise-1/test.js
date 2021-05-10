const chai = window.chai
const expect = chai.expect
// const chaiFetch = require('chai-fetch');
// chai.use(chaiFetch);

describe('data fetching status', () => {
    it('it should show all the response',() => {
        fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment').then((response) => response.text()).then((text) => expect(text).to.equal('hi there'))

    })
   
})