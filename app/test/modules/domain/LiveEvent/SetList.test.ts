describe('SetList', () => {
  describe('create', () => {
    it('should instantiate', () => {
    })
    it('should return error when songs are an empty list', () => {
    })
    it('should return error when songs are in sequential order', () => {
    })
    it('should return error when songs do not start from order number 1', () => {
    })
  })
  describe('fromStore', () => {
    it('should instantiate', () => {
    })
    it('should return error when songs are an empty list', () => {
    })
    it('should return error when songs are in sequential order', () => {
    })
    it('should return error when songs do not start from order number 1', () => {
    })
  })
  describe('edit', () => {
    it('should update set list', () => {
    })
    it('should return error when songs are an empty list', () => {
    })
    it('should return error when songs are in sequential order', () => {
    })
    it('should return error when songs do not start from order number 1', () => {
    })
  })
  describe('delete', () => {
    it('should return DeletedSetList')
  })
})

describe('DeletedSetList', () => {
  describe('of', () => {
    it('should instantiate', () => {
    })
  })
})

describe('SetListSong', () => {
  describe('of', () => {
    it('should instantiate', () => {
    })
  })
  describe('fromStore', () => {
    it('should instantiate', () => {
    })
  })
})

describe('SetListSongOrder', () => {
  describe('of', () => {
    it('should instantiate when value is an integer greater than 0', () => {
    })
    it('should return error when value is 0', () => {
    })
    it('should return error when value is an integer less than 0', () => {
    })
    it('should return error when value is not an integer', () => {
    })
  })
})