describe('nocode', () => {
  it('should contain no javascript code', () => {
    expect(() => {
      const nocode = require('.')
    }).toThrow(/cannot find module/i);
  })
})

