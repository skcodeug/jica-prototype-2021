import { Test, TestingModule } from '@nestjs/testing';
import { LawsController } from './laws.controller';

describe('LawsController', () => {
  let controller: LawsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LawsController],
    }).compile();

    controller = module.get<LawsController>(LawsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
