import { Photo, PhotoID } from '@/modules/domain/Photo/Photo'
import { v4 as uuidv4 } from 'uuid'

describe('Photo', () => {
  describe('of', () => {
    it('should instantiate', () => {
      const photo = Photo.of()

      expect(photo).toBeInstanceOf(Photo)
      expect(photo.id).toStrictEqual(PhotoID.of(photo.id.value))
    })
  })
  describe('fromStore', () => {
    it('should instantiate', () => {
      const id = uuidv4()
      const photo = Photo.fromStore(id)

      expect(photo).toBeInstanceOf(Photo)
      expect(photo.id).toStrictEqual(PhotoID.of(id))
    })
  })
})