import something from '../../source/js/dev/modules/something';

describe('something()', () => {
  it('should return the jQuery version', () => {
    const getJQueryVersion = something();
    expect(getJQueryVersion).to.be.a('string');
    expect(getJQueryVersion).to.equal('3.2.1');
  });
});
