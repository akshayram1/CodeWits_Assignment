const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Auth API', () => {
    it('should register a new user', (done) => {
        chai.request(app)
            .post('/auth/register')
            .send({
                role: 'Company',
                email: 'company@example.com',
                password: 'password123',
                name: 'Example Company'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
});
