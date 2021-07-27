import{expect} from 'chai';
import supertest from 'supertest';

describe('auth', function(){
    const request = supertest('http://localhost:3000');

    it('successful auth', function(){
        request
            .post('/auth')
            .send({login: 'admin', password: 'admin'})
            .end(function(err, res){
                expect(res.statusCode).to.eq(200);
                expect(res.body.token).not.to.be.undefined;

            });
    })

    it('Log in with wrong should return err', function(){
        request
            .post('/auth')
            .send({login: 'wrong', password: 'wrong'})
            .end(function(err, res){
                expect(res.statusCode).to.eq(404)
                expect(res.body.message).to.eq('Wrong login or password.');

            })
    })

});