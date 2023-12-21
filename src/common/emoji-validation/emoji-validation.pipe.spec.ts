import { BadRequestException } from '@nestjs/common';
import { EmojiValidationPipe } from './emoji-validation.pipe';

describe('EmojiValidationPipe', () => {
  const emojiValidationPipe = new EmojiValidationPipe();
  it('should be defined', () => {
    expect(new EmojiValidationPipe()).toBeDefined();
  });

  it("should be return undefined when value is empty",()=>{
    const result =  emojiValidationPipe.transform()
    expect(result).toBe(undefined)
  })
  it(`should throw error when no value is not a number`, () => {
    const result = () => emojiValidationPipe.transform(`string`)
    expect(result).toThrow(BadRequestException)
  })

  it(`should throw error when no value is outside of range`, () => {
    const result = () => emojiValidationPipe.transform(`99`)
    expect(result).toThrow(BadRequestException)
  })

  it(`should return number when value is valid`, () => {
    const result = emojiValidationPipe.transform(`5`)
    expect(result).toBe(5)
  })
});
