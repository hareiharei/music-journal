import { LiveEventID } from "@/modules/domain/LiveEvent/LiveEvent"
import { DeletedLiveEventReview, LiveEventReview, LiveEventReviewID } from "@/modules/domain/LiveEvent/LiveEventReview"
import { v4 as uuidv4 } from 'uuid'

describe('LiveEventReview', () => {
  describe('create', () => {
    it('should instantiate when review is a non-empty string', () => {
      const liveEventID = LiveEventID.new()
      const review = 'review'

      const liveEventReview = LiveEventReview.create(liveEventID, review)

      const expectedLiveEventReview = LiveEventReview.fromStore(
        liveEventReview.id.value,
        liveEventID.value,
        review
      )

      expect(liveEventReview).toStrictEqual(expectedLiveEventReview)
    })
    it('should return error when review is an empty string', () => {
      const liveEventID = LiveEventID.new()
      const review = ''

      expect(() =>
        LiveEventReview.create(liveEventID, review)
      ).toThrow('Live Event Review should not be an empty string')
    })
  })
  describe('fromStore', () => {
    it('should instantiate when review is a non-empty string', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const review = 'review'

      const liveEventReview = LiveEventReview.fromStore(id, liveEventID, review)

      expect(liveEventReview).toBeInstanceOf(LiveEventReview)
      expect(liveEventReview.id).toStrictEqual(LiveEventReviewID.of(id))
      expect(liveEventReview.liveEventID).toStrictEqual(LiveEventID.of(liveEventID))
      expect(liveEventReview.review).toBe(review)
    })
    it('should return error when review is an empty string', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const review = ''

      expect(() =>
        LiveEventReview.fromStore(id, liveEventID, review)
      ).toThrow('Live Event Review should not be an empty string')
    })
  })
  describe('edit', () => {
    it('should update review when review is a non-empty string', () => {
      const liveEventReview = LiveEventReview.create(
        LiveEventID.new(), 
        'review',
      )
      const newReview = 'new review'
      const newLiveEventReview = liveEventReview.edit(newReview)

      const expectedLiveEventReview = LiveEventReview.fromStore(
        liveEventReview.id.value,
        liveEventReview.liveEventID.value,
        newReview,
      )

      expect(newLiveEventReview).toStrictEqual(expectedLiveEventReview)
    })
    it('should return error when review is an empty string', () => {
      const liveEventReview = LiveEventReview.create(
        LiveEventID.new(), 
        'review',
      )
      const newReview = ''

      expect(() =>
        liveEventReview.edit(newReview)
      ).toThrow('Live Event Review should not be an empty string')
    })
  })
  describe('delete', () => {
    it('should return DeletedLiveEventReview', () => {
      const liveEventReview = LiveEventReview.create(
        LiveEventID.new(), 
        'review',
      )

      const deletedLiveEventReview = liveEventReview.delete()

      const expectedDeletedLiveEventReview = DeletedLiveEventReview.of(
        liveEventReview.id,
        liveEventReview.liveEventID,
        liveEventReview.review,
      )

      expect(deletedLiveEventReview).toStrictEqual(expectedDeletedLiveEventReview)
    })
  })
})

describe('DeletedLiveEventReview', () => {
  describe('of', () => {
    it('should instantiate', () => {
      const id = LiveEventReviewID.new()
      const liveEventID = LiveEventID.new()
      const review = 'review'

      const deletedLiveEventReview = DeletedLiveEventReview.of(id, liveEventID, review)

      expect(deletedLiveEventReview).toBeInstanceOf(DeletedLiveEventReview)
      expect(deletedLiveEventReview.id).toStrictEqual(id)
      expect(deletedLiveEventReview.liveEventID).toStrictEqual(liveEventID)
      expect(deletedLiveEventReview.review).toBe(review)
    })
  })
})