import { LiveEventID } from "@/modules/domain/LiveEvent/LiveEvent"
import { DeletedLiveEventPhoto, LiveEventPhoto, LiveEventPhotoID, PhotoDescription } from "@/modules/domain/LiveEvent/LiveEventPhoto"
import { Photo } from "@/modules/domain/Photo/Photo"
import { v4 as uuidv4 } from 'uuid'

describe('LiveEventPhoto', () => {
  describe('of', () => {
    it('should instantiate when description is a non-empty string', () => {
      const liveEventID = LiveEventID.new()
      const description = 'test_description'
      const photo = Photo.of()
      const liveEventPhoto = LiveEventPhoto.of(liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(liveEventPhoto.id.value))
      expect(liveEventPhoto.liveEventID).toBe(liveEventID)
      expect(liveEventPhoto.description).toStrictEqual(PhotoDescription.of(description))
      expect(liveEventPhoto.photo).toBe(photo)
    })
    it('should instantiate when description is null', () => {
      const liveEventID = LiveEventID.new()
      const description = null
      const photo = Photo.of()
      const liveEventPhoto = LiveEventPhoto.of(liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(liveEventPhoto.id.value))
      expect(liveEventPhoto.liveEventID).toBe(liveEventID)
      expect(liveEventPhoto.description).toBe(null)
      expect(liveEventPhoto.photo).toBe(photo)
    })
    it('should instantiate when description is an empty string', () => {
      const liveEventID = LiveEventID.new()
      const description = ''
      const photo = Photo.of()
      const liveEventPhoto = LiveEventPhoto.of(liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(liveEventPhoto.id.value))
      expect(liveEventPhoto.liveEventID).toBe(liveEventID)
      expect(liveEventPhoto.description).toBe(null)
      expect(liveEventPhoto.photo).toBe(photo)
    })
  })
  describe('fromStore', () => {
    it('should instantiate when description is a non-empty string', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const description = 'test_description'
      const photo = Photo.fromStore(uuidv4())
      const liveEventPhoto = LiveEventPhoto.fromStore(id, liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(id))
      expect(liveEventPhoto.liveEventID).toStrictEqual(LiveEventID.of(liveEventID))
      expect(liveEventPhoto.description).toStrictEqual(PhotoDescription.of(description))
      expect(liveEventPhoto.photo).toBe(photo)
    })
    it('should instantiate when description is null', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const description = null
      const photo = Photo.fromStore(uuidv4())
      const liveEventPhoto = LiveEventPhoto.fromStore(id, liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(id))
      expect(liveEventPhoto.liveEventID).toStrictEqual(LiveEventID.of(liveEventID))
      expect(liveEventPhoto.description).toBe(null)
      expect(liveEventPhoto.photo).toBe(photo)
    })
    it('should instantiate when description is an empty string', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const description = ''
      const photo = Photo.fromStore(uuidv4())
      const liveEventPhoto = LiveEventPhoto.fromStore(id, liveEventID, description, photo)

      expect(liveEventPhoto).toBeInstanceOf(LiveEventPhoto)
      expect(liveEventPhoto.id).toStrictEqual(LiveEventPhotoID.of(id))
      expect(liveEventPhoto.liveEventID).toStrictEqual(LiveEventID.of(liveEventID))
      expect(liveEventPhoto.description).toBe(null)
      expect(liveEventPhoto.photo).toBe(photo)
    })
  })
  describe('updateDescription', () => {
    it('should update description when it is a non-empty string', () => {
      const liveEventPhoto = LiveEventPhoto.of(
        LiveEventID.new(),
        'description', 
        Photo.of()
      )

      const newDescription = 'new description'
      const newLiveEventPhoto = liveEventPhoto.updateDescription(newDescription)

      const expectedLiveEventPhoto = LiveEventPhoto.fromStore(
        liveEventPhoto.id.value,
        liveEventPhoto.liveEventID.value,
        newDescription,
        liveEventPhoto.photo
      )

      expect(newLiveEventPhoto).toStrictEqual(expectedLiveEventPhoto)
    })
    it('should update description when it is null', () => {
      const liveEventPhoto = LiveEventPhoto.of(
        LiveEventID.new(),
        'description', 
        Photo.of()
      )

      const newDescription = null
      const newLiveEventPhoto = liveEventPhoto.updateDescription(newDescription)

      const expectedLiveEventPhoto = LiveEventPhoto.fromStore(
        liveEventPhoto.id.value,
        liveEventPhoto.liveEventID.value,
        null,
        liveEventPhoto.photo
      )

      expect(newLiveEventPhoto).toStrictEqual(expectedLiveEventPhoto)
    })
    it('should update description when it is an empty string', () => {
      const liveEventPhoto = LiveEventPhoto.of(
        LiveEventID.new(),
        'description', 
        Photo.of()
      )

      const newDescription = ''
      const newLiveEventPhoto = liveEventPhoto.updateDescription(newDescription)

      const expectedLiveEventPhoto = LiveEventPhoto.fromStore(
        liveEventPhoto.id.value,
        liveEventPhoto.liveEventID.value,
        null,
        liveEventPhoto.photo
      )

      expect(newLiveEventPhoto).toStrictEqual(expectedLiveEventPhoto)
    })
  })
  describe('delete', () => {
    it('should return DeletedLiveEventPhoto', () => {
      const liveEventPhoto = LiveEventPhoto.of(
        LiveEventID.new(),
        'description', 
        Photo.of()
      )

      const deletedLiveEventPhoto = liveEventPhoto.delete()

      const expectedDeletedLiveEventPhoto = DeletedLiveEventPhoto.of(
        liveEventPhoto.id,
        liveEventPhoto.liveEventID,
        liveEventPhoto.description,
        liveEventPhoto.photo,
      )

      expect(deletedLiveEventPhoto).toStrictEqual(expectedDeletedLiveEventPhoto)
    })
  })
})

describe('DeletedLiveEventPhoto', () => {
  describe('of', () => {
    it('should instantiate when description is PhotoDescription', () => {
      const id = LiveEventPhotoID.new()
      const liveEventID = LiveEventID.new()
      const description = PhotoDescription.of('test_description')
      const photo = Photo.of()
      const deletedLiveEventPhoto = DeletedLiveEventPhoto.of(
        id,
        liveEventID,
        description,
        photo,
      )

      expect(deletedLiveEventPhoto).toBeInstanceOf(DeletedLiveEventPhoto)
      expect(deletedLiveEventPhoto.id).toBe(id)
      expect(deletedLiveEventPhoto.liveEventID).toBe(liveEventID)
      expect(deletedLiveEventPhoto.description).toBe(description)
      expect(deletedLiveEventPhoto.photo).toBe(photo)
    })
    it('should instantiate when description is null', () => {
      const id = LiveEventPhotoID.new()
      const liveEventID = LiveEventID.new()
      const description = null
      const photo = Photo.of()
      const deletedLiveEventPhoto = DeletedLiveEventPhoto.of(
        id,
        liveEventID,
        description,
        photo,
      )

      expect(deletedLiveEventPhoto).toBeInstanceOf(DeletedLiveEventPhoto)
      expect(deletedLiveEventPhoto.id).toBe(id)
      expect(deletedLiveEventPhoto.liveEventID).toBe(liveEventID)
      expect(deletedLiveEventPhoto.description).toBe(description)
      expect(deletedLiveEventPhoto.photo).toBe(photo)
    })
  })
})

describe('PhotoDescription', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const description = 'test'
      const photoDescription = PhotoDescription.of(description)

      expect(photoDescription).toBeInstanceOf(PhotoDescription)
      expect(photoDescription.value).toBe(description)
    })
    it('should return error when value is an empty string', () => {
      expect(() => 
        PhotoDescription.of('')
      ).toThrow('Photo Description should not be an empty string')
    })
  })
})