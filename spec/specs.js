describe('sides', function() {
  it('for an equilateral triangle each side should equal the same length', function(){
    sides(4,4,4).should.equal("equilateral")
  });
  it('for an isosceles triangle at least 2 sides should be equal', function(){
    sides(3,2,2).should.equal("isosceles")
  });
  it('for a scalene triangle no sides will equal the same length', function(){
    sides(2,3,4).should.equal("scalene")
  });
  it('if one side is equal to or greater than the length of the other sides combined it will be false', function(){
    triangle(1,2,6).should.equal(false)
  });

});
describe('triangle', function() {
  it('if one side is equal to or greater than the length of the other sides combined it will be false', function(){
    triangle(1,2,6).should.equal("not a triangle")
  });
});
